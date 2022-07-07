import React, { useEffect, useState, useRef, useCallback, useMemo } from 'react';
import { StatusBar, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { RectButtonProps } from 'react-native-gesture-handler';

import { ItemList } from '../../components/ItemList';
import { Modal } from '../Modal';

import {
  BottomSheetModalProvider,
  BottomSheetModal,
} from '@gorhom/bottom-sheet';

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
  Footer,
  ButtonArea,
  AddButton,
} from './styles';
import { useTheme } from 'styled-components';

interface IconProps extends RectButtonProps { }

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
  {
    id: 5,
    name: 'Arroz Camil 5kg',
    quantity: 2,
    type: 'pacotes',
    amount: 11.98,
    isChecked: false,
  },
  {
    id: 6,
    name: 'Feijão Kicaldo 1kg',
    quantity: 3,
    type: 'pacotes',
    amount: 8.05,
    isChecked: false,
  },
  {
    id: 7,
    name: 'Açúcar União 1kg',
    quantity: 5,
    type: 'pacotes',
    amount: 4.99,
    isChecked: true,
  },
  {
    id: 8,
    name: 'Café Pilão 500g',
    quantity: 2,
    type: 'pacotes',
    amount: 14.99,
    isChecked: true,
  },
];

export function Dashboard({ ...rest }: IconProps) {
  const [listItens, setListItens] = useState<ItemListProps[]>(list);
  const [favoriteChecked, setFavoriteChecked] = useState(true);
  const [balance, setBalance] = useState(0);

  const theme = useTheme();

  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ['40%'], []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  const toggleBottomSheetView = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);

  function toggleFavoriteList() {
    setFavoriteChecked(!favoriteChecked);
  }

  function toggleItemCheck(id: number) {
    const updatedList = listItens.map(item => ({ ...item }));
    const findItem = updatedList.find(item => item.id === id);

    if (!findItem) {
      return;
    }

    findItem.isChecked = !findItem.isChecked;
    setListItens(updatedList);
  }

  useEffect(() => {
    function calculateBalance() {
      setBalance(0);
      listItens.forEach(item => {
        const total = item.amount * item.quantity;
        setBalance(oldValue => oldValue + total);
      });
    }

    calculateBalance();

  }, []);

  function closeKeyboardAndModal() {
    Keyboard.dismiss();
    bottomSheetRef.current?.close();
  }

  return (
    <BottomSheetModalProvider>
        <TouchableWithoutFeedback onPress={closeKeyboardAndModal}>
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
                R$ {balance}
              </TotalCost>
              <TitleCost>
                Valor total da compra
              </TitleCost>
            </PriceArea>

            <ListArea>
              <ListItens
                data={listItens}
                keyExtractor={item => String(item.id)}
                renderItem={({ item }) => <ItemList data={item} check={toggleItemCheck} />}
                ItemSeparatorComponent={() => <Separator />}
              />
              <Footer>
                <ButtonArea {...rest}>
                  <AddButton name='add' onPress={toggleBottomSheetView} />
                </ButtonArea>
              </Footer>
            </ListArea>

            <BottomSheetModal
              ref={bottomSheetRef}
              index={0}
              snapPoints={snapPoints}
              onChange={handleSheetChanges}
              enablePanDownToClose
              handleIndicatorStyle={{
                backgroundColor: theme.colors.checked,
                width: 60
              }}
              containerStyle={{
                backgroundColor: 'rgba(0, 0, 0, 0.25)'
              }}
            >
              <Modal />
            </BottomSheetModal>

            <StatusBar
              barStyle={'light-content'}
              backgroundColor='transparent'
              translucent
            />
          </Container>
        </TouchableWithoutFeedback>
    </BottomSheetModalProvider>
  );
}