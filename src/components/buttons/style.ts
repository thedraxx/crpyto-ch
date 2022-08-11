import styled from 'styled-components/native';
import {colors} from '../../utils/colors';

export const AddView = styled.View`
  justify-content: space-around;
  align-items: center;
  background-color: ${colors.white};
`;

export const AddButton = styled.TouchableHighlight`
  position: relative;
  bottom: 0;
  padding: 10px;
  margin: 10px;
`;

export const ButtonText = styled.Text`
  font-size: 17px;
  color: ${colors.blue};
`;
