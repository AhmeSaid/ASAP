import React, { useState } from 'react';
import { INPUT_BACKGROUND, PLACEHOLDER } from '../styles/colors';
import { StyleSheet, TextInput, View } from 'react-native';
import CustomText from './customText';
import { boxShadow } from '../styles/mixins';

const CustomInput = ({
  placeholder,
  containerStyle,
  containerInputStyle,
  header = '',
  onChangeText = () => { },
  keyboardType = 'default',
  autoFocus = false,
  getRef = () => { },
  editable = true,
  placeholderColor = PLACEHOLDER,
  inputStyle,
  leftIcon,
  rightIcon,
  fontFamily = 'Muli-Regular',
  value,
  maxLength,
  shadow = false
}) => {
  const [text, setText] = useState('');

  return (
    <View style={[{ paddingHorizontal: shadow ? 3 : 0 }, containerStyle]}>
      {header != '' && <CustomText
        text={header}
        color='black'
      />}
      <View style={[styles.textInputView, shadow && boxShadow(), containerInputStyle]}>
        {leftIcon && <View style={styles.leftIconView}>{leftIcon}</View>}

        <TextInput
          ref={(ref) => {
            getRef(ref);
          }}
          onChangeText={(text) => {
            setText(text);
            onChangeText(text);
          }}
          value={value}
          style={[
            styles.textInput,
            {
              paddingLeft: leftIcon ? 55 : 18,
            },
            inputStyle,
          ]}
          placeholder={placeholder}
          placeholderTextColor={placeholderColor}
          maxLength={maxLength}
          fontFamily={fontFamily}
          keyboardType={keyboardType}
          autoFocus={autoFocus}
          editable={editable}
        />

        {rightIcon && <View style={styles.rightconView}>{rightIcon}</View>}

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInputView: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
    justifyContent: 'center',
    fontSize: 14,
    backgroundColor: INPUT_BACKGROUND
  },
  textInput: {
    paddingRight: 18,
    width: '100%',
  },
  leftIconView: {
    position: 'absolute',
    left: 24,
  },
  rightconView: {
    position: 'absolute',
    right: 24,
  },
});

export default CustomInput;
