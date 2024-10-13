import { styled } from 'styled-components';
import { theme } from '../../styles/themes';

type CategoryBadgeProps = {
  $color: string;
};

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

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const ContainerMain = styled.div`
  display: flex;
  gap: 0.75rem;
  width: 100%;
  padding: 0 1.5rem 0 1.5rem;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 0 1rem 1rem 1rem;
  }
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

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const InputGroup = styled.div`
  display: flex;
  align-items: flex-end;
  max-width: 22.5rem;
  width: 100%;
  gap: 0.5rem;

  @media (max-width: 768px) {
    max-width: 100%;
    align-items: center;
  }
`;

export const Balance = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
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

    @media (max-width: 768px) {
      flex-direction: column;
      gap: 0.5rem;
    }
  }
`;

export const ChartContent = styled.div`
  height: 14.5rem;

  @media (max-width: 768px) {
    height: 12rem;
  }

  @media (max-width: 480px) {
    height: 10rem;
  }
`;

export const ChartActions = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.5rem;
  width: 8rem;

  @media (max-width: 480px) {
    width: 100%;
    justify-content: space-between;
  }
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

  @media (max-width: 1024px) {
    min-width: 100%;
  }
`;

export const SearchTransaction = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

export const TransactionGroup = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0.75rem;
`;

export const CategoryBadge = styled.span<CategoryBadgeProps>`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-size: 0.625rem;
  font-weight: 400;
  border: 1px solid ${(props) => props.$color};
  border-radius: 0.125rem;
  color: ${(props) => props.$color};
  padding: 0.25rem;
  cursor: pointer;

  svg {
    fill: ${theme.colors.error};
    width: 0.875rem;
    height: 0.875rem;
  }
`;
