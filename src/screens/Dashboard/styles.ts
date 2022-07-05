import styled from 'styled-components/native';
import { FlatList, FlatListProps } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { BorderlessButton } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
import { ItemListProps } from './';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background_dark};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 56px 16px 8px;
`;

export const ListName = styled.Text`
  font-size: ${RFValue(22)}px;
  font-weight: 700;
  color: ${({theme}) => theme.colors.white};
  
`;

export const IconWrapper = styled(BorderlessButton)`
  
`;

export const StarIcon = styled(AntDesign)`
  color: ${({theme}) => theme.colors.yellow};
  font-size: 30px;
  `;

export const PriceArea = styled.View`
  align-items: center;
  justify-content: center;
  padding: 40px 0px 60px;
`;

export const TotalCost = styled.Text`
  font-size: ${RFValue(45)}px;
  font-weight: 700;
  color: ${({theme}) => theme.colors.white};
  
  `;

export const TitleCost = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({theme}) => theme.colors.white};
`;

export const ListArea = styled.View``;

export const ListItens = styled(FlatList).attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
      padding: 24
    }
})`
  background-color: ${({theme}) => theme.colors.background_light};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;

  padding: 16px 32px;
`;
