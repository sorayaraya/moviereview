import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import {SearchBar, Card} from 'react-native-elements';
import {ms} from 'react-native-size-matters';
import Color from '../Componen/Color';
export default function Header() {
  const [valueSearch, setValueSearch] = useState('');
  const updateSearch = search => {
    setValueSearch(search);
  };

  return (
    <View style={styles.mainContainer}>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity>
          <Image source={require('../Screen/Assets/Image/home.png')} />
        </TouchableOpacity>
        <Text style={styles.container2}>Tangerang, Indonesia</Text>
      </View>

      <View>
        <Text>Find Fresh Grocerries</Text>
      </View>

      <View>
        <SearchBar
          placeholder="Search Groceries"
          onChangeText={updateSearch}
          value={valueSearch}
          inputContainerStyle={{
            backgroundColor: 'white',
          }}
          platform="default"
          round={false}
          containerStyle={{
            backgroundColor: 'white',
            borderTopWidth: ms(0),

            borderBottomWidth: ms(0),
            marginTop: ms(4),
            height: ms(64),
          }}
          placeholderTextColor={Color.GREEN_2}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 20,
        }}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: ms(72),
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ddd',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  textEdit: {
    fontSize: ms(12),
    fontWeight: '400',
    color: Color.WHITE,
  },
  container2: {
    flexDirection: 'row',
    color: Color.GREEN_1,

    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  Icon: {
    marginRight: ms(16),
  },
  containerButtonEdit: {
    height: ms(80),
  },
  buttonEdit: {
    backgroundColor: Color.GREEN_1,
    height: ms(40),
    width: ms(100),
    borderRadius: ms(7),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
  },
  buttonEdit2: {
    backgroundColor: Color.GREEN_1,
    height: ms(30),
    width: ms(50),
    borderRadius: ms(7),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    flexDirection: 'row',
  },
});
