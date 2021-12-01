import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { WHITE } from '../styles/colors';
import { boxShadow } from '../styles/mixins';
import CustomText from './customText';

const ModelCard = ({ onPress = () => { }, item, index }) => {

  return (
    <TouchableOpacity
      activeOpacity={0.75}
      onPress={() => {
        onPress();
      }}
      style={{
        flex: 1,
        marginRight: index % 2 == 0 ? 4 : 0,
        marginLeft: index % 2 == 0 ? 0 : 4,
        paddingHorizontal: 5,
        paddingTop: 1
      }}>
      <View
        style={[
          styles.imageContainer,
          boxShadow()
        ]}>

        <Image
          source={item.pic}
          style={styles.pic}
          resizeMode='center'
        />

      </View>

      <CustomText
        text={item.title}
        style={styles.text}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    height: 114,
    backgroundColor: WHITE,
    borderRadius: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    alignSelf: 'center',
    marginTop: 5
  },
  pic: {
    width: '90%',
    height: '90%'
  }
});

export default ModelCard;
