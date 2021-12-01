import React from 'react';
import { MAIN_TEXT, PRIMARY } from '../styles/colors';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import CustomText from './customText';
import { boxShadow } from '../styles/mixins';

const CustomButton = ({
  onPress,
  disabled = false,
  text,
  textSize = 16,
  textColor = MAIN_TEXT,
  textFontFamily,
  leftIcon,
  rightIcon,
  width = '100%',
  height = 60,
  activeOpacity = 0.5,
  containerStyle,
  leftIconStyle,
  rightIconStyle,
  textStyle,
  shadow = false
}) => {
  return (
    <View style={{ paddingHorizontal: shadow ? 3 : 0 }}>
      <View style={[styles.containerView, containerStyle, shadow && boxShadow()]}>
        <TouchableOpacity
          activeOpacity={activeOpacity}
          onPress={onPress}
          disabled={disabled}
          style={[
            styles.container
            ,
            {
              width: width,
              height: height,
            },
          ]}>
          {leftIcon && (
            <View
              style={[styles.leftIcon, leftIconStyle]}>
              {leftIcon}
            </View>
          )}
          <CustomText
            text={text}
            size={textSize}
            color={textColor}
            fontFamily={textFontFamily}
            style={textStyle}
          />
          {rightIcon && (
            <View
              style={[styles.rightIcon, rightIconStyle]}>
              {rightIcon}
            </View>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    flexDirection: 'row',
    flex: 1
  },
  text: {
    marginLeft: 18
  },
  leftIcon: {
    marginRight: 10,
  },
  rightIcon: {
    marginLeft: 5,
  },
  containerView: {
    backgroundColor: PRIMARY,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    flexDirection: 'row',
  },
})

export default CustomButton;
