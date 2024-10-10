import { useCallback, useState } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Dialog } from '../dialog';
import { Button } from '../buttons';
import { Title } from '../title';
import { Input } from '../inputs';

import { CreateCategoryData } from '../../validators/types';
import { createCategorySchema } from '../../validators/schemas';
import { useFetchAPI } from '../../hooks/useFetchAPI.tsx';

import { Container, ErrorMessageCategory } from './styles';

import { theme } from '../../styles/themes';

export function CreateCategoryDialog() {
  const { createCategory, fetchCategories } = useFetchAPI();
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<CreateCategoryData>({
    defaultValues: {
      title: '',
      color: theme.colors.primary,
    },
    resolver: zodResolver(createCategorySchema),
  });

  const handleClose = useCallback(() => {
    reset();
    setOpen(false);
  }, [reset]);

  const onSubmit = useCallback(
    async (data: CreateCategoryData) => {
      await createCategory(data);
      handleClose();
      await fetchCategories();
    },
    [handleClose, createCategory, fetchCategories],
  );

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
      trigger={<Button>New category</Button>}
    >
      <Container>
        <Title
          title="New Category"
          subtitle="Create a new category for yours transactions"
        />

        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Input
              label="Name"
              placeholder="Category name..."
              {...register('title')}
            />
            {errors.title && (
              <ErrorMessageCategory>
                {errors?.title?.message}
              </ErrorMessageCategory>
            )}

            <Input label="Cor" type="color" {...register('color')} />
          </div>

          <footer>
            <Button onClick={handleClose} variant="outline" type="button">
              Cancel
            </Button>
            <Button type="submit">Register</Button>
          </footer>
        </form>
      </Container>
    </Dialog>
  );
}
