import styled from 'styled-components/native';
import {Colorwhite, ColorGray, ColorBlue} from '../utils/colors';

export const AddButton = styled.TouchableHighlight`
  position: relative;
  bottom: 0;
  padding: 10px;
  margin: 10px;
`;

export const AddView = styled.View`
  justify-content: space-around;
  align-items: center;

  background-color: ${Colorwhite};
`;

export const ViewHome = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${Colorwhite};
`;

export const ButtonText = styled.Text`
  font-size: 15px;
  color: ${ColorBlue};
`;
