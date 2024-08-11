import { useCallback, useState } from 'react';

import { Dialog } from '../dialog';
import { Button } from '../buttons';
import { Title } from '../title';
import { Input } from '../inputs';
import { Container } from './styles';

export function CreateCategoryDialog() {
  const [open, setOpen] = useState(false);

  const handlerClose = useCallback(() => {
    setOpen(false);
  }, []);

  const onSubmit = useCallback(() => {
    handlerClose();
  }, [handlerClose]);

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

        <form>
          <div>
            <Input label="Name" placeholder="Category name..." />
            <Input label="Color" type="color" />
          </div>
          <footer>
            <Button onClick={handlerClose} variant="outline" type="button">
              Cancel
            </Button>
            <Button onClick={onSubmit} type="button">
              Register
            </Button>
          </footer>
        </form>
      </Container>
    </Dialog>
  );
}
