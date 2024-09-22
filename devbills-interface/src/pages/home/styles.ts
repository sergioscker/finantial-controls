import { styled } from 'styled-components';
import { theme } from '../../styles/themes';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  width: 100%;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const ContainerMain = styled.div`
  display: flex;
  gap: 0.75rem;
  width: 100%;
  padding: 0 1.5rem 1.5rem 1.5rem;
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
`;

export const Filters = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: flex-end;
  max-width: 22.5rem;
  width: 100%;
  gap: 0.5rem;
`;

export const Balance = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;
`;

export const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: ${theme.colors.dark};
  border-radius: 0.25rem;
  gap: 0.75rem;

  header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
`;

export const ChartContent = styled.div`
  height: 14.5rem;
`;

export const ChartActions = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;
  width: 8rem;
`;

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  min-width: 22.5rem;
  padding: 1rem;
  border-radius: 0.25rem;
  background-color: ${theme.colors.dark};

  header {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const SearchTransaction = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const TransactionGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0.75rem;
`;
