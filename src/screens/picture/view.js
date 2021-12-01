import React from 'react';
import { ScrollView } from 'react-native';
import { GreanArrow, ProfileIcon } from '../../assets/svgIcons';
import CustomButton from '../../components/customButton';
import styles from './styles';

const PictureView = ({ navigation }) => {

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 50 }}>

      <CustomButton
        rightIcon={<GreanArrow  />}
        leftIcon={<ProfileIcon />}
        rightIconStyle={styles.rightIcon}
        leftIconStyle={styles.leftIcon}
        textStyle={styles.textStyle}
        containerStyle={styles.btnContainer}
        text='Asset Inventory'
        textFontFamily='bold'
        textSize={22}
        shadow={true}
      />

      <CustomButton
        rightIcon={<GreanArrow />}
        leftIcon={<ProfileIcon />}
        rightIconStyle={styles.rightIcon}
        leftIconStyle={styles.leftIcon}
        textStyle={styles.textStyle}
        containerStyle={styles.btnContainer}
        text='Modal'
        textFontFamily='bold'
        textSize={22}
        onPress={() => navigation.navigate('Model')}
        shadow={true}
      />

      <CustomButton
        rightIcon={<GreanArrow />}
        leftIcon={<ProfileIcon />}
        rightIconStyle={styles.rightIcon}
        leftIconStyle={styles.leftIcon}
        textStyle={styles.textStyle}
        containerStyle={styles.btnContainer}
        text='Person'
        textFontFamily='bold'
        textSize={22}
        shadow={true}
      />
    </ScrollView>
  );
};

export default PictureView;
