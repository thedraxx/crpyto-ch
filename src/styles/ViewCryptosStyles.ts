import styled from 'styled-components/native';
import {ColorBlack, ColorLightGray} from '../utils/colors';

// Styled-Components
export const ListCryptos = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 10px;
  padding: 10px;
`;

export const ViewEachCryptos = styled.View`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
`;

export const ViewImageandText = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const ViewHorizontal = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 10px;
`;
export const ViewPrices = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 10px;
  justify-content: space-around;
`;

export const ImageCrypto = styled.Image`
  width: 50px;
  height: 50px;
`;

export const HorizontalView = styled.View`
  border-bottom-width: 1px;
  margin-top: 25px;
  border-bottom-color: ${ColorLightGray};
`;

export const TextPrice = styled.Text`
  text-align: right;
  color: ${ColorBlack};
`;

export const TextChange = styled.Text`
  text-align: right;
  color: ${ColorBlack};
`;

export const TextNoCryptos = styled.Text`
  top: 15px;
  text-align: center;
  color: ${ColorBlack};
  font-size: 20px;
`;
