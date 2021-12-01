import { StyleSheet } from 'react-native';
import {
  BACKGROUND, HEADER, PRIMARY, WHITE,
} from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: BACKGROUND,
  },
  contentContainer: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    flexGrow: 1
  },
  containerI: {
    backgroundColor: PRIMARY,
    borderRadius: 20,
    padding: 16,
    alignItems: 'center',
    flex: 1
  },
  pic: {
    width: '80%',
    height: '80%'
  },
  imageContainer: {
    height: 163,
    width: '60%',
    backgroundColor: WHITE,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20
  },
  line: {
    width: '100%',
    height: .5,
    backgroundColor: HEADER,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingVertical: 10
  },
  sectionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 5
  },
  sectionContainer: {
    width: '100%',
  },
  expandSection: {
    width: '100%'
  },
  inputStyle: {
    height: 38,
    marginBottom: 15
  },
  containerInput: {
    backgroundColor: WHITE
  },
  iconBtn: {
    alignSelf: 'flex-end',
    marginRight: 20
  },
  notesContainer: {
    width: '100%',
    backgroundColor: WHITE,
    padding: 18,
    borderRadius: 20,
    marginTop: 5
  },
  noNotes: {
    alignSelf: 'center'
  },
  notesLine: {
    marginVertical: 5
  }
});

export default styles;
