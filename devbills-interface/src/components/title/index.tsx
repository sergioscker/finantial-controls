import { Container } from './styles';

type TitleProps = {
  title: string;
  subtitle: string;
};

export function Title({ title, subtitle, ...props }: TitleProps) {
  return (
    <Container>
      <h2 {...props}>{title}</h2>
      <span>{subtitle}</span>
    </Container>
  );
}
