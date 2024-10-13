import { useCallback, useEffect, useState } from 'react';

import { Dialog } from '../dialog';
import { Button } from '../buttons';
import { Title } from '../title';
import { Input } from '../inputs';

import { InputMask } from '@react-input/mask';
import { useFetchAPI } from '../../hooks/useFetchAPI';
import { useForm } from 'react-hook-form';

import dayjs from 'dayjs';
import { zodResolver } from '@hookform/resolvers/zod';
import { createTransactionSchema } from '../../validators/schemas';

import { CreateTransactionData } from '../../validators/types';

import {
  Container,
  ContentForm,
  CurrencyInput,
  ErrorMessage,
  InputGroup,
  RadioForm,
  RadioGroup,
} from './styles';

export function CreateTransactionDialog() {
  const { categories, fetchCategories, createTransaction } = useFetchAPI();
  const [open, setOpen] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<CreateTransactionData>({
    defaultValues: {
      categoryId: 'null',
      title: '',
      amount: '',
      date: dayjs('2024-01-01').format('DD/MM/YYYY'),
      type: 'income',
    },
    resolver: zodResolver(createTransactionSchema),
  });

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  const handleClose = useCallback(() => {
    reset();
    setOpen(false);
  }, [reset]);

  const onSubmit = useCallback(
    async (data: CreateTransactionData) => {
      await createTransaction(data);
      handleClose();
    },
    [handleClose, createTransaction],
  );

  return (
    <Dialog
      open={open}
      onOpenChange={setOpen}
      trigger={<Button>New transaction</Button>}
    >
      <Container>
        <Title
          title="New Transaction"
          subtitle="Create a new transaction for your finantial control"
        />

        <form onSubmit={handleSubmit(onSubmit)}>
          <ContentForm>
            <InputGroup>
              <label>Category</label>

              <select {...register('categoryId')}>
                <option value="null">Select a category...</option>

                {categories?.length &&
                  categories.map((item) => (
                    <option key={item._id} value={item._id}>
                      {item.title}
                    </option>
                  ))}
              </select>
              {errors.categoryId && (
                <ErrorMessage>{errors.categoryId.message}</ErrorMessage>
              )}
            </InputGroup>

            <Input
              label="Name"
              placeholder="Transaction name..."
              {...register('title')}
            />
            {errors.title && (
              <ErrorMessage>{errors.title?.message}</ErrorMessage>
            )}
            <InputGroup>
              <label>Amount</label>

              <CurrencyInput
                placeholder="€0,00"
                format="currency"
                currency="EUR"
                {...register('amount')}
              />
              {errors.amount && (
                <ErrorMessage>{errors.amount.message}</ErrorMessage>
              )}
            </InputGroup>

            <InputMask
              component={Input}
              mask="dd/mm/yyyy"
              replacement={{ d: /\d/, m: /\d/, y: /\d/ }}
              label="Date"
              variant="black"
              placeholder="dd/mm/yyyy"
              {...register('date')}
            />
            {errors.date && <ErrorMessage>{errors.date?.message}</ErrorMessage>}

            <RadioForm>
              <RadioGroup>
                <input
                  type="radio"
                  id="income"
                  value="income"
                  {...register('type')}
                />
                <label htmlFor="income">Balance</label>
              </RadioGroup>

              <RadioGroup>
                <input
                  type="radio"
                  id="expense"
                  value="expense"
                  {...register('type')}
                />
                <label htmlFor="expense">Spent</label>
              </RadioGroup>
              {errors.type && (
                <ErrorMessage>{errors.type.message}</ErrorMessage>
              )}
            </RadioForm>
          </ContentForm>

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
