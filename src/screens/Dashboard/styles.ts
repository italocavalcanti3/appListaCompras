import styled from "styled-components/native";
import { FlatList, FlatListProps } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { ItemListProps } from "./";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_dark};
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
  color: ${({ theme }) => theme.colors.white};
`;

export const IconWrapper = styled(BorderlessButton)``;

export const StarIcon = styled(AntDesign)`
  color: ${({ theme }) => theme.colors.yellow};
  font-size: 30px;
`;

export const PriceArea = styled.View`
  align-items: center;
  justify-content: center;
  padding: 20px 0px 30px;
`;

export const TotalCost = styled.Text`
  font-size: ${RFValue(45)}px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
`;

export const TitleCost = styled.Text`
  font-size: ${RFValue(12)}px;
  color: ${({ theme }) => theme.colors.white};
`;

export const ListArea = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background_light};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

export const ListItens = styled(FlatList).attrs({
  showsVerticalScrollIndicator: true,
  scrollEnabled: true,
})`
` as React.ComponentType as new <ItemListProps>() => FlatList<ItemListProps>;

export const Separator = styled.View`
  height: 0.5px;
  background-color: ${({ theme }) => theme.colors.separator};
  margin: 0 32px;
`;

export const Footer = styled.View`
  height: 56px;

  align-items: center;
  justify-content: flex-start;
  margin: 0 32px;

  background-color: ${({ theme }) => theme.colors.white};
`;

export const ButtonArea = styled(RectButton)`
  width: 60px;
  height: 60px;
  border-radius: 35px;

  margin-top: -30px;

  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.brand};
`;

export const AddButton = styled(Ionicons)`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(40)}px;
`;
