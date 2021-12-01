import React from 'react';
import { FlatList, View } from 'react-native';
import { SearchIcon } from '../../assets/svgIcons';
import CustomInput from '../../components/customInput';
import styles from './styles';
import { Printer, Laptop, Lcd, Inc } from '../../assets/images';
import ModelCard from '../../components/modelCard';

const ModelView = ({ navigation }) => {

  const modelData = [
    {
      title: 'Printer HS',
      pic: Printer
    },
    {
      title: 'Laptops',
      pic: Laptop
    },
    {
      title: 'LCD XS',
      pic: Lcd
    },
    {
      title: 'Printer Inc',
      pic: Inc
    }
  ]
  return (
    <View style={styles.container}>
      <CustomInput
        shadow={true}
        placeholder='type to search...'
        rightIcon={<SearchIcon />}
        containerStyle={styles.inputStyle}
      />
      <FlatList
        data={modelData}
        renderItem={
          ({ item, index }) =>
            <ModelCard
              item={item}
              index={index}
              onPress={() => navigation.navigate('ModelDetails')}
            />}
        numColumns={2}
        ItemSeparatorComponent={() => <View style={styles.line} />}
      />
    </View>
  );
};

export default ModelView;
