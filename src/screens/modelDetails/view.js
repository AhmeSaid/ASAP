import React, { useState } from 'react';
import { FlatList, Image, Keyboard, ScrollView, TouchableOpacity, View } from 'react-native';
import { boxShadow } from '../../styles/mixins';
import styles from './styles';
import { Printer } from '../../assets/images';
import CustomText from '../../components/customText';
import { ArrowList, EditIcon } from '../../assets/svgIcons';
import CustomInput from '../../components/customInput';
import IconBtn from '../../components/iconBtn';

const ModelDetailesView = ({ navigation }) => {

  const [isInfo, setIsInfo] = useState(false)
  const [isNotes, setIsNotes] = useState(false)
  const [note, setNote] = useState('')
  const [notesData, setNotesData] = useState([])

  return (
    <ScrollView
      keyboardShouldPersistTaps={'handled'}
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >

      <View style={[styles.containerI, boxShadow()]}>

        <View
          style={[
            styles.imageContainer,
            boxShadow()
          ]}>

          <Image
            source={Printer}
            style={styles.pic}
            resizeMode='center'
          />

        </View>

        <View style={styles.line} />

        <View style={styles.sectionContainer}>
          <TouchableOpacity
            onPress={() => setIsInfo(!isInfo)}
            style={styles.sectionHeader}>
            <CustomText
              text={'Image Info'}
              fontFamily='bold'
              size={20}
            />

            <ArrowList />
          </TouchableOpacity>

          {isInfo &&
            <View style={styles.expandSection}>
              <View style={styles.sectionRow}>
                <CustomText
                  text={'Model'}
                  size={14}
                />

                <CustomText
                  text={'Gt200'}
                  fontFamily='semiBold'
                  size={14}
                />
              </View>

              <View style={styles.sectionRow}>
                <CustomText
                  text={'Model Name'}
                  size={14}
                />

                <CustomText
                  text={'Gt200'}
                  fontFamily='semiBold'
                  size={14}
                />
              </View>

              <View style={styles.sectionRow}>
                <CustomText
                  text={'Model Type'}
                  size={14}
                />

                <CustomText
                  text={'Gt200'}
                  fontFamily='semiBold'
                  size={14}
                />
              </View>

              <View style={styles.sectionRow}>
                <CustomText
                  text={'Coast'}
                  size={14}
                />

                <CustomText
                  text={'Gt200'}
                  fontFamily='semiBold'
                  size={14}
                />
              </View>

              <View style={styles.sectionRow}>
                <CustomText
                  text={'Category'}
                  size={14}
                />

                <CustomText
                  text={'Tecnology'}
                  fontFamily='semiBold'
                  size={14}
                />
              </View>

            </View>
          }
        </View>

        <View style={styles.line} />

        <View style={styles.sectionContainer}>
          <TouchableOpacity
            onPress={() => setIsNotes(!isNotes)}
            style={styles.sectionHeader}>
            <CustomText
              text={'Notes'}
              fontFamily='bold'
              size={20}
            />

            <ArrowList />
          </TouchableOpacity>

          {isNotes &&
            <View style={styles.expandSection}>
              <IconBtn
                text='Save'
                style={styles.iconBtn}
                onPress={() => {
                  if (note != '') {
                    let newNote = {
                      name: 'Ahmed Said',
                      date: '28.1.2022-12:00PM',
                      note
                    }
                    setNotesData([...notesData, newNote])
                    setNote('')
                    Keyboard.dismiss()
                  }
                }}
                leftIcon={<EditIcon />}
              />
              <CustomInput
                shadow={true}
                value={note}
                placeholder='Add a Note...'
                containerStyle={styles.inputStyle}
                containerInputStyle={styles.containerInput}
                onChangeText={(text) => {
                  setNote(text)
                }}
              />

              <CustomText
                text={'History Notes'}
                size={14}
              />

              <View style={styles.notesContainer}>
                {notesData.length == 0 ?
                  <CustomText
                    text={'There Is No Notes'}
                    size={14}
                    color='header'
                    style={styles.noNotes}
                  />
                  :
                  <View>
                    <FlatList
                      data={notesData}
                      renderItem={({ item }) => {
                        return (
                          <View>
                            <CustomText
                              text={item.name}
                              size={16}
                              fontFamily='semiBold'
                            />

                            <CustomText
                              text={item.date}
                              size={14}
                            />

                            <CustomText
                              text={item.note}
                              size={16}
                              fontFamily='medium'
                            />
                          </View>
                        )
                      }}
                      ItemSeparatorComponent={() => <View style={[styles.line, styles.notesLine]} />}
                    />
                  </View>

                }
              </View>
            </View>
          }
        </View>
      </View>
    </ScrollView>
  );
};

export default ModelDetailesView;
