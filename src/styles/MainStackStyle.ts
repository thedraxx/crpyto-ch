import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {ColorBlack, ColorBlue, Colorwhite} from '../utils/colors';

export const styles = StyleSheet.create({
  headerStyleHome: {
    backgroundColor: `${ColorBlue}`,
  },
  headerStyleAdd: {
    backgroundColor: `${Colorwhite}`,
    tintColor: `${ColorBlack}`,
    fontWeight: 'bold',
    titleFontSize: 20,
  },
});

// StyledComponents
export const ViewTitleStack = styled.View`
  background-color: ${ColorBlue};
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
  bottom: 30px;
  justify-content: space-between;
`;

export const ImageCustom = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 50px;
  display: flex;
  top: 45px;
  left: 80%;
`;

export const TitleApp = styled.Text`
  font-size: 30px;
  color: ${Colorwhite};
  font-weight: bold;
`;
