import { InputMask } from '@react-input/mask';
import { Input } from '../../components/inputs';
import { Logo } from '../../components/logo';
import { Title } from '../../components/title';
import { ButtonIcon } from '../../components/button-icon';
import { Card } from '../../components/card';
import { TransactionsPainel } from '../../components/transactions';
import { CreateCategoryDialog } from '../../components/create-category-dialog';
import { CreateTransactionDialog } from '../../components/create-transaction-dialog';
import { CategoriesPieChart } from '../../components/categories-pie-chart';

import {
  ContainerMain,
  Filters,
  InputGroup,
  Header,
  Section,
  Balance,
  ChartContainer,
  ChartContent,
  ChartActions,
  TransactionGroup,
  Aside,
  SearchTransaction,
} from './styles';
import { FinancialEvolutionBarChart } from '../../components/financial-evolution';

export function Home() {
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
              />

              <InputMask
                component={Input}
                mask="dd/mm/yyyy"
                replacement={{ d: /\d/, m: /\d/, y: /\d/ }}
                variant="dark"
                label="End"
                placeholder="dd/mm/yyyy"
              />

              <ButtonIcon />
            </InputGroup>
          </Filters>

          <Balance>
            <Card title="Balance" amount={10000} />
            <Card title="Balance" amount={10000} variant="incomes" />
            <Card title="Balance" amount={10000} variant="expenses" />
          </Balance>

          <ChartContainer>
            <header>
              <Title
                title="Spending"
                subtitle="Expenses by category and period"
              />
            </header>

            <ChartContent>
              <CategoriesPieChart />
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
              <Input variant="black" placeholder="Transactions seach..." />
              <ButtonIcon />
            </SearchTransaction>
          </header>

          <TransactionGroup>
            <TransactionsPainel
              id={1}
              amount={20000}
              date="01/08/2024"
              category={{ title: 'Alimentação', color: '#ff33bb' }}
              title="Mercado"
            />
            <TransactionsPainel
              id={1}
              amount={20000}
              date="01/08/2024"
              category={{ title: 'Alimentação', color: '#ff33bb' }}
              title="Mercado"
            />
            <TransactionsPainel
              id={1}
              amount={20000}
              date="01/08/2024"
              category={{ title: 'Alimentação', color: '#ff33bb' }}
              title="Mercado"
            />
            <TransactionsPainel
              id={1}
              amount={20000}
              date="01/08/2024"
              category={{ title: 'Alimentação', color: '#ff33bb' }}
              title="Mercado"
            />
          </TransactionGroup>
        </Aside>
      </ContainerMain>
    </>
  );
}
