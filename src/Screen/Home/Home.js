import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {SearchBar, Card} from 'react-native-elements';
import {ms} from 'react-native-size-matters';
import Color from '../../Componen/Color';
import Header from '../../Componen/Header';
import {ScrollView} from 'react-native-gesture-handler';
export default function Home(props) {
  const [valueSearch, setValueSearch] = useState('');
  const updateSearch = search => {
    setValueSearch(search);
  };

  return (
    <View style={styles.mainContainer}>
      <View>
        <Header />
        <View style={{marginTop: 50}}>
          <Text style={{fontWeight: 'bold', marginBottom: 5}}>Categories</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 20,
          }}>
          <View style={styles.containerButtonEdit}>
            <TouchableOpacity style={styles.buttonEdit}>
              <Text style={styles.textEdit}>Apple</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerButtonEdit}>
            <TouchableOpacity style={styles.buttonEdit}>
              <Text style={styles.textEdit}>Orange</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerButtonEdit}>
            <TouchableOpacity style={styles.buttonEdit}>
              <Text style={styles.textEdit}>Banana</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Card
            containerStyle={{
              borderRadius: ms(8),
              height: ms(79),
              width: ms(320),
              paddingVertical: ms(2),
            }}>
            <View>
              <Text style={{fontWeight: '400', color: '#8E8E8E'}}>
                Sweet Apple Indonesia
              </Text>
              <Text style={{fontWeight: '400', color: '#8E8E8E'}}>
                Rp. 25.000 Kg
              </Text>
              <View style={{flexDirection: 'row', paddingHorizontal: 20}}>
                <TouchableOpacity style={styles.buttonEdit2}>
                  <Text style={styles.textEdit}>Buy</Text>
                </TouchableOpacity>
                <Image
                  style={{width: 20, height: 25}}
                  source={require('../Assets/Image/apple.png')}
                />
              </View>
            </View>
          </Card>
        </View>
        <View>
          <Card
            containerStyle={{
              borderRadius: ms(8),
              height: ms(79),
              width: ms(320),
              paddingVertical: ms(2),
            }}>
            <View>
              <Text style={{fontWeight: '400', color: '#8E8E8E'}}>
                Sweet Apple Canada
              </Text>
              <Text style={{fontWeight: '400', color: '#8E8E8E'}}>
                Rp. 25.000 Kg
              </Text>
              <View style={{flexDirection: 'row', paddingHorizontal: 20}}>
                <TouchableOpacity style={styles.buttonEdit2}>
                  <Text style={styles.textEdit}>Buy</Text>
                </TouchableOpacity>
                <Image
                  style={{width: 20, height: 25}}
                  source={require('../Assets/Image/apple.png')}
                />
              </View>
            </View>
          </Card>
        </View>
        <View>
          <Card
            containerStyle={{
              borderRadius: ms(8),
              height: ms(79),
              width: ms(320),
              paddingVertical: ms(2),
            }}>
            <View>
              <Text style={{fontWeight: '400', color: '#8E8E8E'}}>
                Sweet Apple Japan
              </Text>
              <Text style={{fontWeight: '400', color: '#8E8E8E'}}>
                Rp. 25.000 Kg
              </Text>
              <View style={{flexDirection: 'row', paddingHorizontal: 20}}>
                <TouchableOpacity style={styles.buttonEdit2}>
                  <Text style={styles.textEdit}>Buy</Text>
                </TouchableOpacity>
                <Image
                  style={{width: 20, height: 25}}
                  source={require('../Assets/Image/apple.png')}
                />
              </View>
            </View>
          </Card>
        </View>
        <View>
          <Card
            containerStyle={{
              borderRadius: ms(8),
              height: ms(79),
              width: ms(320),
              paddingVertical: ms(2),
            }}>
            <View>
              <Text style={{fontWeight: '400', color: '#8E8E8E'}}>
                Sweet Apple India
              </Text>
              <Text style={{fontWeight: '400', color: '#8E8E8E'}}>
                Rp. 25.000 Kg
              </Text>
              <View style={{flexDirection: 'row', paddingHorizontal: 20}}>
                <TouchableOpacity style={styles.buttonEdit2}>
                  <Text style={styles.textEdit}>Buy</Text>
                </TouchableOpacity>
                <Image
                  style={{width: 20, height: 25}}
                  source={require('../Assets/Image/apple.png')}
                />
              </View>
            </View>
          </Card>
        </View>
      </View>
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
  mainContent: {
    marginTop: ms(18),
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
