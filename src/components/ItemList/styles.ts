import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { BorderlessButton } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

interface Props {
  isChecked: boolean;
}

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 24px 32px;
`;

export const ContentWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const IconArea = styled(BorderlessButton)`
  margin-right: 14px;
`;

export const Icon = styled(AntDesign)<Props>`
  font-size: ${RFValue(20)}px;
  color: ${({theme, isChecked}) => 
  isChecked ? theme.colors.brand : theme.colors.checked };
`;

export const InfoArea = styled.View``;

export const Name = styled.Text<Props>`
  font-size: ${RFValue(16)}px;
  color: ${({theme, isChecked}) => 
    isChecked ? theme.colors.checked : theme.colors.background_dark};
  text-decoration: ${({isChecked}) => isChecked ? 'line-through' : 'none'};
`;

export const Details = styled.Text`
  color: ${({theme}) => theme.colors.checked};
  font-size: ${RFValue(14)}px;
  `;

export const Amount = styled.Text<Props>`
  font-size: ${RFValue(16)}px;
  font-weight: 700;
  color: ${({theme, isChecked}) => 
    isChecked ? theme.colors.checked : theme.colors.brand};
  text-decoration: ${({isChecked}) => isChecked ? 'line-through' : 'none'};
`;