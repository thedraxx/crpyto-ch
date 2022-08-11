import styled from 'styled-components/native';
import {colors} from '../../utils/colors';

// Styled-Components
export const ListCryptos = styled.View`
  display: flex;
  flex: 1;
  flex-grow: 1;
  flex-direction: column;
  margin: 5px;
  padding: 5px;
  top: 13px;
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
  width: 52px;
  height: 52px;
`;

export const HorizontalView = styled.View`
  border-bottom-width: 1px;
  margin-top: 25px;
  border-bottom-color: ${colors.lightGray};
`;

export const TextPrice = styled.Text`
  text-align: right;
  color: ${colors.black};
  font-weight: bold;
  font-size: 19px;
`;

export const TextChange = styled.Text`
  text-align: right;
  color: ${(props: {positive: boolean}) => (props.positive ? 'green' : 'red')};
`;

export const TextNoCryptos = styled.Text`
  display: flex;
  margin-top: 35px;
  text-align: center;
  justify-content: center;
  color: ${colors.gray};
  font-size: 20px;
`;

export const FlatListCustom = styled.FlatList`
  flex: 1;
  flex-grow: 1;
  width: 100%;
`;

export const TextName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${colors.black};
`;

export const TextCode = styled.Text`
  font-size: 15px;
  bottom: 2px;
`;
