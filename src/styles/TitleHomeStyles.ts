import styled from 'styled-components/native';
import {ColorBlue} from '../utils/colors';

export const ViewTitleStack = styled.View`
  background-color: ${ColorBlue};
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
  bottom: 30;
  justify-content: space-between;
`;

export const CustomImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 50px;
  display: flex;
  top: 45px;
  left: 80%;
`;

export const TitleScreen = styled.Text`
  font-size: 30px;
  color: white;
  font-weight: bold;
`;
