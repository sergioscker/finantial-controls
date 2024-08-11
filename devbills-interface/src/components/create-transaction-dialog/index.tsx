import { useCallback, useState } from 'react';

import { Dialog } from '../dialog';
import { Button } from '../buttons';
import { Title } from '../title';
import { Input } from '../inputs';
import {
  Container,
  ContentForm,
  CurrencyInput,
  InputGroup,
  RadioForm,
  RadioGroup,
} from './styles';
import { InputMask } from '@react-input/mask';

export function CreateTransactionDialog() {
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
      trigger={<Button>New transaction</Button>}
    >
      <Container>
        <Title
          title="New Transaction"
          subtitle="Create a new transaction for your finantial control"
        />

        <form>
          <ContentForm>
            <InputGroup>
              <label>Category</label>
              <select>
                <option value="null">Select a category...</option>
              </select>
            </InputGroup>

            <Input label="Name" placeholder="Transaction name..." />

            <InputGroup>
              <label>Amount</label>

              <CurrencyInput
                placeholder="$0,00"
                format="currency"
                currency="USD"
              />
            </InputGroup>

            <InputMask
              component={Input}
              mask="dd/mm/yyyy"
              replacement={{ d: /\d/, m: /\d/, y: /\d/ }}
              label="Date"
              variant="black"
              placeholder="dd/mm/yyyy"
            />

            <RadioForm>
              <RadioGroup>
                <input type="radio" id="income" value="income" name="type" />
                <label htmlFor="income">Balance</label>
              </RadioGroup>

              <RadioGroup>
                <input type="radio" id="expense" value="expense" name="type" />
                <label htmlFor="expense">Spent</label>
              </RadioGroup>
            </RadioForm>
          </ContentForm>

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
