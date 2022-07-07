import styled from "styled-components/native";
import { RFValue } from "react-native-responsive-fontsize";

import { RectButton } from "react-native-gesture-handler";

export const Container = styled.View`
  flex: 1;
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.brand};
  text-align: center;
`;

export const InputTitle = styled.Text`
  font-size: ${RFValue(14)}px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.brand};

  margin-bottom: 8px;
`;

export const FormWrapper = styled.View`
  padding: 16px;
`;

export const Description = styled.View``;

export const DescriptionInput = styled.TextInput.attrs({
  keyboardType: "default",
  returnKeyType: "next",
  selectionColor: "#1B998B",
})`
  height: 50px;
  background-color: ${({ theme }) => theme.colors.background_input};
  border-radius: 4px;

  margin-bottom: 16px;
  padding: 12px;

  font-size: ${RFValue(16)}px;
`;

export const FieldsWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Quantity = styled.View`
  flex: 1;
  margin-right: 16px;
`;

export const QuantityInput = styled.TextInput.attrs({
  keyboardType: "numeric",
  returnKeyType: "next",
  selectionColor: "#1B998B",
})`
  height: 50px;
  background-color: ${({ theme }) => theme.colors.background_input};
  border-radius: 4px;

  margin-bottom: 16px;
  padding: 12px;

  font-size: ${RFValue(16)}px;
`;

export const Amount = styled.View`
  flex: 1;
  margin-right: 16px;
`;

export const AmountInput = styled.TextInput.attrs({
  keyboardType: "numeric",
  returnKeyType: "next",
  selectionColor: "#1B998B",
})`
  height: 50px;
  background-color: ${({ theme }) => theme.colors.background_input};
  border-radius: 4px;

  margin-bottom: 16px;
  padding: 12px;

  font-size: ${RFValue(16)}px;
`;

export const ButtonDone = styled(RectButton)`
  background-color: ${({ theme }) => theme.colors.background_dark};
  padding: 10px;
  border-radius: 30px;
  margin-top: 8px;
`;

export const ButtonTitle = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${RFValue(20)}px;
  text-align: center;
`;
