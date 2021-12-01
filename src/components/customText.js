import React from 'react';
import {
  PRIMARY,
  BLACK,
  MAIN_TEXT,
  WHITE,
  HEADER,
} from '../styles/colors';
import {Text} from 'react-native';
import {scaleFontSize} from '../styles/mixins';

const chooseTextColor = (color) => {
  switch (color) {
    case 'white':
      return WHITE;
    case 'primary':
      return PRIMARY;
    case 'black':
      return BLACK;
    case 'main':
      return MAIN_TEXT;
      case 'header':
      return HEADER;
    default:
      break;
  }
};

const chooseFontFamily = (font) => {
  switch (font) {
    case 'extraBold':
      return '1000';
    case 'bold':
      return '900';
    case 'semiBold':
      return '700';
    case 'medium':
      return '600';
    case 'regular':
      return '400';

    default:
      break;
  }
};

const CustomText = ({
  text = 'none',
  color = 'main',
  size = 14,
  fontFamily = 'regular',
  style,
  num,
}) => {
  return (
    <Text
      numberOfLines={num}
      style={[
        {
          color: chooseTextColor(color),
          fontWeight: chooseFontFamily(fontFamily),
          fontSize: scaleFontSize(size),
        },
        style,
      ]}>
      {text}
    </Text>
  );
};

export default CustomText;
