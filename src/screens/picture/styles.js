import { StyleSheet } from 'react-native';
import {
  BACKGROUND,
} from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: BACKGROUND,
    paddingHorizontal: 50,
    paddingTop: 20
  },
  leftIcon: {
    flex: 1
  },
  rightIcon: {
    alignItems: 'flex-end',
    flex: 1,
  },
  textStyle: {
    flex: 10
  },
  btnContainer: {
    paddingHorizontal: 20,
    marginTop: 22
  }

});

export default styles;
