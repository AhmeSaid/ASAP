import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { GREEN, HEADER, MAIN_TEXT, WHITE } from '../styles/colors';
import Picture from '../screens/picture';
import { TouchableOpacity, View } from 'react-native';
import { BlackBack, RightSignIcon } from '../assets/svgIcons';
import CustomText from '../components/customText';
import Model from '../screens/model';
import ModelDetails from '../screens/modelDetails';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Filter"
        screenOptions={({ navigation }) => ({
          headerTitleStyle: {
            color: MAIN_TEXT,
          },
          headerStyle: {
            backgroundColor: HEADER,
          },
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => { navigation.goBack() }}
              style={{
                marginRight: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <View style={{
                width: 26,
                height: 26,
                borderRadius: 13,
                backgroundColor: WHITE,
                borderColor: MAIN_TEXT,
                borderWidth: 1,
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <BlackBack />
              </View>
              <CustomText
                text='Back'
                size={10}
              />
            </TouchableOpacity>
          ),
        })}
      >
        <Stack.Screen
          name="Picture"
          component={Picture}
          options={({ navigation }) => ({
            title: 'Picture',
            headerRight: () => (
              <TouchableOpacity
                onPress={() => { }}
                style={{
                  marginRight: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <View style={{
                  width: 26,
                  height: 26,
                  borderRadius: 13,
                  backgroundColor: WHITE,
                  borderColor: GREEN,
                  borderWidth: 1,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <RightSignIcon />
                </View>
                <CustomText
                  text='Proccess'
                  size={10}
                />
              </TouchableOpacity>
            ),

          })}
        />

        <Stack.Screen
          name="Model"
          component={Model}
          options={({ navigation }) => ({
            title: 'Model',

          })}
        />

        <Stack.Screen
          name="ModelDetails"
          component={ModelDetails}
          options={({ navigation }) => ({
            title: 'Model Details',

          })}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
