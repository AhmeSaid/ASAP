import { StyleSheet } from 'react-native';
import {
  BACKGROUND, PRIMARY,
} from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: BACKGROUND,
    paddingHorizontal: 16,
    paddingTop: 20
  },
  inputStyle: {
    height: 49,
    marginBottom: 40
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: PRIMARY,
    marginVertical: 15
  }
});

export default styles;
