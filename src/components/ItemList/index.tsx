import React from 'react';
import { BorderlessButtonProps } from 'react-native-gesture-handler';
import { ItemListProps } from '../../screens/Dashboard';

import {
  Container,
  ContentWrapper,
  Name,
  IconArea,
  Icon,
  InfoArea,
  Details,
  Amount,
} from './styles';

interface Props {
  data: ItemListProps;
  check: (id: number) => void;
}

export function ItemList({ data, check }: Props, { ...rest }: BorderlessButtonProps) {
  return (
    <Container>
      <ContentWrapper>
        <IconArea {...rest}>
          <Icon
            name={ data.isChecked ? 'checkcircle' : 'checkcircleo' }
            isChecked={data.isChecked}
            onPress={() => check(data.id)}
          />
        </IconArea>

        <InfoArea>
          <Name isChecked={data.isChecked}>{data.name}</Name>
          <Details>{`${data.quantity} ${data.type}`}</Details>
        </InfoArea>
      </ContentWrapper>

      <Amount isChecked={data.isChecked}>R$ {data.amount}</Amount>
    </Container>
  );
}