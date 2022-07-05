import React, { useState } from 'react';
import { Alert, StatusBar } from 'react-native';
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
  Separator,
} from './styles';

interface IconProps extends RectButtonProps {}

export interface ItemListProps {
  id: number;
  name: string;
  quantity: number;
  type: string;
  amount: number;
  isChecked: boolean;
}

let list: ItemListProps[] = [
  {
    id: 1,
    name: 'Arroz Camil 5kg',
    quantity: 2,
    type: 'pacotes',
    amount: 11.98,
    isChecked: false,
  },
  {
    id: 2,
    name: 'Feijão Kicaldo 1kg',
    quantity: 3,
    type: 'pacotes',
    amount: 8.05,
    isChecked: false,
  },
  {
    id: 3,
    name: 'Açúcar União 1kg',
    quantity: 5,
    type: 'pacotes',
    amount: 4.99,
    isChecked: true,
  },
  {
    id: 4,
    name: 'Café Pilão 500g',
    quantity: 2,
    type: 'pacotes',
    amount: 14.99,
    isChecked: true,
  },
];

export function Dashboard({...rest}: IconProps) {
  const [listItens, setListItens] = useState<ItemListProps[]>(list);
  const [favoriteChecked, setFavoriteChecked] = useState(true);

  function toggleFavoriteList() {
    setFavoriteChecked(!favoriteChecked);
  }

  function toggleItemCheck(id: number) {
    const updatedList = listItens.map(item => ({...item}));
    const findItem = updatedList.find(item => item.id === id);

    if (!findItem) {
      return;
    }

    findItem.isChecked = !findItem.isChecked;
    console.log(findItem.isChecked);
    setListItens(updatedList);
  }

  return (
    <Container>
      <Header>
        <ListName>
          Lista Mercado
        </ListName>
        <IconWrapper {...rest}>
            <StarIcon
              name={favoriteChecked ? 'star' : 'staro'}
              onPress={toggleFavoriteList}
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
          data={listItens}
          keyExtractor={item => String(item.id)}
          renderItem={({item}) => <ItemList data={item} check={toggleItemCheck} />}
          ItemSeparatorComponent={() => <Separator />}
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