import { z } from 'zod';

export const transactionsFilterSchema = z.object({
  title: z.string().optional(),
  categoryId: z.string().optional(),
  beginDate: z
    .string()
    .regex(/^(0[1-9]|[12][0-9]|3[01]\/0[0-9]|1[0-2]\/\d{4}$)/, {
      message: 'Invalid date',
    }),
  endDate: z
    .string()
    .regex(/^(0[1-9]|[12][0-9]|3[01]\/0[0-9]|1[0-2]\/\d{4}$)/, {
      message: 'Invalid date',
    }),
});

export const createCategorySchema = z.object({
  title: z
    .string()
    .min(1, { message: 'Must contain at least 1 character.' })
    .max(255),
  color: z.string().regex(/^#[A-Fa-f0-9]{6}$/, {
    message: 'Must follow the pattern: #rrggbb',
  }),
});

export const createTransactionSchema = z.object({
  categoryId: z.string().regex(/^(?!null$)/g, { message: 'Choose a category' }),
  title: z
    .string()
    .min(1, { message: 'Must contain at least 1 character.' })
    .max(255, { message: 'Maximum characters reached' }),
  amount: z
    .string()
    .min(1, { message: 'Must contain at least 1 digit.' })
    .max(255),
  date: z.string().regex(/^(0[1-9]|[12][0-9]|3[01]\/0[0-9]|1[0-2]\/\d{4}$)/, {
    message: 'Invalid date',
  }),
  type: z.enum(['income', 'expense'], {
    errorMap: () => ({ message: 'Please, select a valid type' }),
  }),
});

export const financialEvolutionFilterSchema = z.object({
  year: z.string().regex(/\d/, { message: 'Enter a valid year' }),
});
