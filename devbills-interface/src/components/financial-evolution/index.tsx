import { ResponsiveBar } from '@nivo/bar';
import dayjs from 'dayjs';
import ptBRLocale from 'dayjs/locale/pt-br';
import { useMemo } from 'react';

import { theme } from '../../styles/themes';
import { formatCurrency } from '../../utils/format-currency';

dayjs.locale(ptBRLocale);

const apiData = [
  {
    _id: {
      year: 2024,
      month: 9,
    },
    balance: 68900,
    incomes: 76342,
    expenses: 48399,
  },
  {
    _id: {
      year: 2024,
      month: 10,
    },
    balance: 68900,
    incomes: 76342,
    expenses: 48399,
  },
  {
    _id: {
      year: 2024,
      month: 11,
    },
    balance: 68900,
    incomes: 76342,
    expenses: 48399,
  },
  {
    _id: {
      year: 2024,
      month: 12,
    },
    balance: 68900,
    incomes: 76342,
    expenses: 48399,
  },
];

type ChartData = {
  month: string;
  Balance: number;
  Incomes: number;
  Expenses: number;
};

export function FinancialEvolutionBarChart() {
  const data = useMemo<ChartData[]>(() => {
    const chartData: ChartData[] = apiData.map((item) => ({
      month: dayjs(`${item._id.year}-${item._id.month}-01`).format('MMM'),
      Balance: item.balance,
      Incomes: item.incomes,
      Expenses: item.expenses,
    }));

    return chartData;
  }, []);
  return (
    <ResponsiveBar
      data={data}
      keys={['Balance', 'Incomes', 'Expenses']}
      colors={[theme.colors.info, theme.colors.primary, theme.colors.error]}
      indexBy={'month'}
      groupMode="grouped"
      enableLabel={false}
      enableGridY={false}
      padding={0.2}
      axisLeft={{
        tickSize: 0,
        format: formatCurrency,
      }}
      margin={{ left: 80, bottom: 28 }}
      theme={{
        text: {
          fontFamily: 'Lexend',
          fontSize: 10,
        },
        axis: {
          ticks: {
            text: {
              fill: theme.colors.white,
            },
          },
        },
        tooltip: {
          container: {
            backgroundColor: theme.colors.black,
            padding: 16,
            color: theme.colors.white,
            fontFamily: 'Lexend',
            fontSize: 12,
            borderRadius: 4,
          },
        },
      }}
      valueFormat={formatCurrency}
    />
  );
}
