import { formatCurrency } from '../../utils/format-currency';

import { TransactionsAside, Content, InfoContent } from './styles';

type TransactionsProps = {
  id: number;
  title: string;
  date: string;
  amount: number;

  category: {
    title: string;
    color: string;
  };
  variant?: 'income' | 'expense';
};

export function TransactionsPainel({
  id,
  title,
  date,
  amount,
  category,
  variant = 'expense',
}: TransactionsProps) {
  return (
    <TransactionsAside>
      <InfoContent $variant={variant}>
        <span>{id.toString().padStart(4, '0')}</span>

        <div>
          <strong>{title}</strong>
          <span>{date}</span>
        </div>
      </InfoContent>

      <Content $variant={variant} $tagColor={category.color}>
        <strong>{formatCurrency(amount)}</strong>
        <span>{category.title.toUpperCase()}</span>
      </Content>
    </TransactionsAside>
  );
}
