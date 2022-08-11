import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import {colors} from '../utils/colors';

export const styles = StyleSheet.create({
  headerStyleHome: {
    backgroundColor: `${colors.blue}`,
  },
  headerStyle: {
    backgroundColor: `${colors.white}`,
  },
  headerTitle: {
    color: `${colors.white}`,
  },
});

// StyledComponents
export const ViewTitleStack = styled.View`
  background-color: ${colors.blue};
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: auto;
  bottom: 30px;
  justify-content: space-between;
`;

export const ImageCustom = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  display: flex;
  top: 32px;
  left: 75%;
`;

export const TitleApp = styled.Text`
  font-size: 21px;
  color: ${colors.white};
  font-weight: bold;
  left: 5px;
  top: -10px;
`;
