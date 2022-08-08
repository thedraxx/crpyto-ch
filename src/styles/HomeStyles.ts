import styled from 'styled-components/native';
import {Colorwhite, ColorGray} from '../utils/colors';

export const TouchableAddButton = styled.TouchableHighlight`
  padding: 10px;
  margin: 10px;
  margin-top: 20px;
`;

export const TouchableAddView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 10px;
  top: 0;
`;

export const ViewHome = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${Colorwhite};
`;

export const TextButton = styled.Text`
  font-size: 20px;
  color: ${ColorGray};
`;
