import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import {
  Container,
  Title,
  InputTitle,
  Description,
  DescriptionInput,
  FormWrapper,
  FieldsWrapper,
  Quantity,
  QuantityInput,
  Amount,
  AmountInput,
  ButtonDone,
  ButtonTitle,
} from './styles';

export function Modal({
  ...rest
}: RectButtonProps) {

  return (
    <Container>
        <Title>Adicionar item</Title>
        <FormWrapper>
          <Description>
            <InputTitle>Descrição</InputTitle>
            <DescriptionInput />
          </Description>
          <FieldsWrapper>
            <Quantity>
              <InputTitle>Quantidade</InputTitle>
              <QuantityInput />
            </Quantity>
            <Amount>
              <InputTitle>Total</InputTitle>
              <AmountInput />
            </Amount>
          </FieldsWrapper>
          <ButtonDone {...rest}>
            <ButtonTitle>Feito!</ButtonTitle>
          </ButtonDone>
        </FormWrapper>
    </Container>
  );
}