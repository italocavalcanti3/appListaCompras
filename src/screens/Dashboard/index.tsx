import React, { useState } from 'react';
import { StatusBar } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';

import { ItemList } from '../../components/ItemList';

import {
  Container,
  Header,
  ListName,
  PriceArea,
  IconWrapper,
  StarIcon,
  TotalCost,
  TitleCost,
  ListArea,
  ListItens,
} from './styles';

interface IconProps extends RectButtonProps {}

export interface ItemListProps {
  id: number;
  name: string;
  quantity: number;
  type: string;
  amount: number;
}

const list: ItemListProps[] = [
  {
    id: 1,
    name: 'Arroz Camil 5kg',
    quantity: 2,
    type: 'pacotes',
    amount: 11.98
  },
  {
    id: 2,
    name: 'Feijão Kicaldo 1kg',
    quantity: 3,
    type: 'pacotes',
    amount: 8.05
  },
  {
    id: 3,
    name: 'Açúcar União 1kg',
    quantity: 5,
    type: 'pacotes',
    amount: 4.99
  },
  {
    id: 4,
    name: 'Café Pilão 500g',
    quantity: 2,
    type: 'pacotes',
    amount: 14.99
  },
];

export function Dashboard({...rest}: IconProps) {
  const [isChecked, setIsChecked] = useState(true);

  function handleItemChecked() {
    setIsChecked(!isChecked);
  }

  return (
    <Container>
      <Header>
        <ListName>
          Lista Mercado
        </ListName>
        <IconWrapper {...rest}>
            <StarIcon
              name={isChecked ? 'star' : 'staro'}
              onPress={handleItemChecked}
            />
        </IconWrapper>
      </Header>

      <PriceArea>
        <TotalCost>
          R$ 103,05
        </TotalCost>
        <TitleCost>
          Valor total da compra
        </TitleCost>
      </PriceArea>

      <ListArea>
        <ListItens
          data={list}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => <ItemList data={item}/>}
        />
      </ListArea>

    <StatusBar
      barStyle={'light-content'}
      backgroundColor='transparent'
      translucent
    />
    </Container>
  );
}