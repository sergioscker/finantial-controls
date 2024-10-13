import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import dayjs from 'dayjs';
import { zodResolver } from '@hookform/resolvers/zod';

import { InputMask } from '@react-input/mask';

import { Input } from '../../components/inputs';
import { Logo } from '../../components/logo';
import { Title } from '../../components/title';
import { ButtonIcon } from '../../components/button-icon';
import { Card } from '../../components/card';
import { TransactionsPainel } from '../../components/transactions';
import { CreateCategoryDialog } from '../../components/create-category-dialog';
import { CreateTransactionDialog } from '../../components/create-transaction-dialog';
import {
  CategoriesPieChart,
  CategoryProps,
} from '../../components/categories-pie-chart';
import { FinancialEvolutionBarChart } from '../../components/financial-evolution';

import { TransactionsFilterData } from '../../validators/types';
import { transactionsFilterSchema } from '../../validators/schemas';

import { useFetchAPI } from '../../hooks/useFetchAPI';

import {
  Aside,
  Balance,
  CategoryBadge,
  ChartActions,
  ChartContainer,
  ChartContent,
  ContainerMain,
  Filters,
  Header,
  InputGroup,
  SearchTransaction,
  Section,
  TransactionGroup,
} from './styles';
import { X } from '@phosphor-icons/react';

export function Home() {
  const transactionsFilterForm = useForm<TransactionsFilterData>({
    defaultValues: {
      title: '',
      categoryId: '',
      beginDate: dayjs().startOf('month').format('DD/MM/YYYY'),
      endDate: dayjs().endOf('month').format('DD/MM/YYYY'),
    },
    resolver: zodResolver(transactionsFilterSchema),
  });

  const { transactions, fetchTransactions, dashboard, fetchDashboard } =
    useFetchAPI();

  useEffect(() => {
    const { beginDate, endDate } = transactionsFilterForm.getValues();
    fetchDashboard({ beginDate, endDate });
    fetchTransactions(transactionsFilterForm.getValues());
  }, [fetchTransactions, transactionsFilterForm, fetchDashboard]);

  const [selectedCategory, setSeletedCategory] = useState<CategoryProps | null>(
    null,
  );

  const handleSelectCategory = useCallback(
    async ({ id, title, color }: CategoryProps) => {
      setSeletedCategory({ id, title, color });
      transactionsFilterForm.setValue('categoryId', id);
      await fetchTransactions(transactionsFilterForm.getValues());
    },
    [transactionsFilterForm, fetchTransactions],
  );

  const handleDeselectCategory = useCallback(async () => {
    setSeletedCategory(null);
    transactionsFilterForm.setValue('categoryId', '');
    await fetchTransactions(transactionsFilterForm.getValues());
  }, [transactionsFilterForm, fetchTransactions]);

  const onSubmitTransactions = useCallback(
    async (data: TransactionsFilterData) => {
      await fetchTransactions(data);
    },
    [fetchTransactions],
  );

  const onSubmitDashboard = useCallback(
    async (data: TransactionsFilterData) => {
      const { beginDate, endDate } = data;
      await fetchDashboard({ beginDate, endDate });
      await fetchTransactions(data);
    },
    [fetchDashboard, fetchTransactions],
  );

  return (
    <>
      <Header>
        <Logo />

        <div>
          <CreateTransactionDialog />
          <CreateCategoryDialog />
        </div>
      </Header>

      <ContainerMain>
        <Section>
          <Filters>
            <Title
              title="Balance"
              subtitle="Incomes and expenses in the period"
            />

            <InputGroup>
              <InputMask
                component={Input}
                mask="dd/mm/yyyy"
                replacement={{ d: /\d/, m: /\d/, y: /\d/ }}
                variant="dark"
                label="Start"
                placeholder="dd/mm/yyyy"
                {...transactionsFilterForm.register('beginDate')}
              />
              {transactionsFilterForm.formState.errors.beginDate?.message}

              <InputMask
                component={Input}
                mask="dd/mm/yyyy"
                replacement={{ d: /\d/, m: /\d/, y: /\d/ }}
                variant="dark"
                label="End"
                placeholder="dd/mm/yyyy"
                {...transactionsFilterForm.register('endDate')}
              />
              {transactionsFilterForm.formState.errors.endDate?.message}

              <ButtonIcon
                onClick={transactionsFilterForm.handleSubmit(onSubmitDashboard)}
              />
            </InputGroup>
          </Filters>

          <Balance>
            <Card title="Balance" amount={dashboard?.balance?.balance || 0} />
            <Card
              title="Revenues"
              amount={dashboard?.balance?.incomes || 0}
              variant="incomes"
            />
            <Card
              title="Expenses"
              amount={dashboard?.balance?.expenses * -1 || 0}
              variant="expenses"
            />
          </Balance>

          <ChartContainer>
            <header>
              <Title
                title="Spending"
                subtitle="Expenses by category and period"
              />

              {selectedCategory && (
                <CategoryBadge
                  $color={selectedCategory.color}
                  onClick={handleDeselectCategory}
                >
                  <X />
                  {selectedCategory.title.toUpperCase()}
                </CategoryBadge>
              )}
            </header>

            <ChartContent>
              <CategoriesPieChart
                expenses={dashboard.expenses}
                onClick={handleSelectCategory}
              />
            </ChartContent>
          </ChartContainer>

          <ChartContainer>
            <header>
              <Title
                title="Finantial Evolution"
                subtitle="Balances, Incomes, Spending the in year"
              />

              <ChartActions>
                <InputMask
                  component={Input}
                  mask="yyyy"
                  replacement={{ y: /\d/ }}
                  variant="black"
                  label="Year"
                  placeholder="yyyy"
                />

                <ButtonIcon />
              </ChartActions>
            </header>
            <ChartContent>
              <FinancialEvolutionBarChart />
            </ChartContent>
          </ChartContainer>
        </Section>
        <Aside>
          <header>
            <Title
              title="Transactions"
              subtitle="Incomes and Expenses in the period"
            />
            <SearchTransaction>
              <Input
                variant="black"
                placeholder="Transactions seach..."
                {...transactionsFilterForm.register('title')}
              />
              <ButtonIcon
                onClick={transactionsFilterForm.handleSubmit(
                  onSubmitTransactions,
                )}
              />
            </SearchTransaction>
          </header>

          <TransactionGroup>
            {transactions?.length &&
              transactions?.map((item, index) => (
                <TransactionsPainel
                  key={item._id}
                  id={index + 1}
                  amount={
                    item.type === 'expense' ? item.amount * -1 : item.amount
                  }
                  date={dayjs(item.date).add(3, 'hours').format('DD/MM/YYYY')}
                  category={{
                    title: item.category.title,
                    color: item.category.color,
                  }}
                  title={item.title}
                  variant={item.type}
                />
              ))}
          </TransactionGroup>
        </Aside>
      </ContainerMain>
    </>
  );
}
