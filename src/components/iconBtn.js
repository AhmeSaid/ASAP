import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import CustomText from './customText';

const IconBtn = ({ text, onPress, leftIcon, rightIcon, style, textSize = 12, textColor = "red" }) => {
    return (
        <TouchableOpacity
            activeOpacity={.75}
            onPress={onPress}
            style={[styles.touch, style]}
        >
            <View
                style={styles.View}
            >
                {leftIcon}
                <CustomText
                    text={text}
                    color={textColor}
                    size={textSize}
                    fontFamily="bold"
                    style={{ marginLeft: leftIcon && (5) }}
                />
                {rightIcon}

            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    View: {
        flexDirection: 'row',
        alignSelf: 'center',
        alignItems: 'center'
    },
    touch: {
        height: 20,
        justifyContent: 'center',

    }
})

export default IconBtn;