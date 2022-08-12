import React, {useState} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  Alert,
  Button,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import Video from 'react-native-video';

const HomeScreen = ({navigation}) => {
  //const [number, onChangeNumber] = useState(null);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        //justifyContent: 'center',
        marginTop: 10,
        // marginBottom: 130,
        marginLeft: 22,
        marginRight: 22,
        //alignItems: 'center',
        //backgroundColor: '#FFFF',
      }}>
      <View
        style={{
          flexDirection: 'row',
          //alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{marginLeft: 2, marginTop: 10}}>
          <Text
            style={{
              color: 'rgba(17, 20, 45, 0.65)',
              fontSize: 12,
              //fontFamily: 'Haffer XH',
              fontWeight: '500',
            }}>
            Welcome back,
          </Text>
          <Text style={styles.nameText}>Rahul Kumar</Text>
        </View>
        <View style={{marginTop: 10}}>
          <Image
            style={styles.tinyLogo}
            source={require('../assets/Avatar.png')}
          />
        </View>
      </View>
      <View
        style={{
          //marginBottom: 30,
          marginTop: 33,
          alignItems: 'center',
        }}>
        <ScrollView style={{marginBottom: 130}}>
          <View
            style={{
              backgroundColor: 'black',
              width: 332,
              height: 480,
              borderRadius: 30,
              marginBottom: 27,
            }}>
            {/* <Text style={{color: 'red'}}>Hiiiiiiiii</Text> */}
            <View
              style={{
                backgroundColor: 'grey',
                width: 332,
                height: 255,
                borderTopEndRadius: 30,
                borderTopLeftRadius: 30,
              }}>
              <Video
                source={require('../assets/Apple.mp4')}
                //muted="True"
                controls={true}
                style={styles.backgroundVideo}
              />
            </View>
            <View
              style={{
                backgroundColor: '#FFFFFF',
                width: 332,
                height: 227,
                borderBottomEndRadius: 30,
                borderBottomLeftRadius: 30,
              }}>
              <View style={{marginLeft: 19, marginTop: 14, marginRight: 19}}>
                <View style={{marginBottom: 6}}>
                  <Text
                    style={{color: '#6F767E', fontWeight: '600', fontSize: 12}}>
                    IPHONE SAVINGS PLAN
                  </Text>
                </View>
                <Text
                  style={{color: '#001B19', fontWeight: '700', fontSize: 22}}>
                  Save up for the next iPhone and
                  <Text
                    style={{color: '#068E33', fontWeight: '700', fontSize: 22}}>
                    {' '}
                    get 10% Cashback!
                  </Text>
                </Text>
                <View
                  style={{
                    marginTop: 24,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={styles.rectShapeView}>
                    <Image
                      //style={styles.tinyLogo}
                      source={require('../assets/Truck.png')}
                    />
                  </View>
                  <View style={styles.rectShapeView}>
                    <Image
                      //style={styles.tinyLogo}
                      source={require('../assets/charger.png')}
                    />
                  </View>
                  <View style={styles.rectShapeView}>
                    <Image
                      //style={styles.tinyLogo}
                      source={require('../assets/Gift.png')}
                    />
                  </View>
                </View>
                <View
                  style={{
                    marginTop: 6,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={styles.textView}>
                    <Text style={styles.lastText}>Priority Delivery</Text>
                  </View>
                  <View style={styles.textView}>
                    <Text style={styles.lastText}>Free Charger</Text>
                  </View>
                  <View style={styles.textView}>
                    <Text style={styles.lastText}>Tortoise Merch</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              backgroundColor: 'black',
              width: 332,
              height: 531,
              borderRadius: 30,
              marginBottom: 27,
            }}>
            <Video
              source={require('../assets/mmtVideo.mp4')} // Can be a URL or a local file.
              style={styles.backgroundVideo2}
              controls={true}
              resizeMode={'cover'}
            />
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: 'flex-end',
              }}>
              <Image
                style={styles.mmtLogo}
                source={require('../assets/mmt.png')}
              />
              <View style={styles.BottomBar}>
                <View style={{marginLeft: 19, marginTop: 18, marginRight: 19}}>
                  <View style={{marginBottom: 8}}>
                    <Text
                      style={{
                        color: '#6F767E',
                        fontWeight: '600',
                        fontSize: 12,
                      }}>
                      MAKE MY TRIP SAVINGS PLAN
                    </Text>
                  </View>
                  <Text
                    style={{color: '#001B19', fontWeight: '700', fontSize: 20}}>
                    Save up for the next Vacation and
                    <Text
                      style={{
                        color: '#068E33',
                        fontWeight: '700',
                        fontSize: 20,
                      }}>
                      {' '}
                      get 10% Cashback!
                    </Text>
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>

      {/* <View style={{marginLeft: 20, marginLeft: 35}}>
        <Text style={{color: '#333333'}}>
          Mobile Numbers
          <Text style={{color: 'red'}}>*</Text>
        </Text>
      </View>
      <View style={{alignItems: 'center', marginRight: 15, marginLeft: 15}}>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="Enter Mobile Number"
          keyboardType="numeric"
          maxLength={10}
        />
      </View>

      <View
        style={{
          width: 180,
          height: 50,
          marginLeft: 80,
          marginRight: 80,
          marginTop: 64,
        }}>
        <Button
          color="#5A67F2"
          title="Continue"
          style={{width: 180}}
          onPress={() =>
            navigation.navigate('Details', {paramKey: '+91 ' + number})
          }
        />
      </View> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  nameText: {
    color: '#11142D',
    fontSize: 24,
    //fontFamily: 'Haffer XH',
    fontWeight: '600',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  mmtLogo: {
    width: 56,
    height: 56,
    marginLeft: 18,
    marginBottom: 13,
  },
  input: {
    width: 310,
    height: 42,
    padding: 5,
    //margin: 5,
    //marginRight: 15,
    marginLeft: 5,

    textAlign: 'center',
    //alignContent: 'center',
    //alignSelf: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#F1F1F1',
    borderStyle: 'solid',
    borderRadius: 10,
  },
  appButtonContainer: {
    width: 180,
    height: 50,
    marginLeft: 80,
    marginRight: 80,
    marginTop: 64,
  },
  backgroundVideo: {
    //position: 'absolute',

    width: '100%',
    height: '100%',
    borderTopEndRadius: 30,
    borderTopLeftRadius: 30,
  },
  backgroundVideo2: {
    position: 'absolute',
    width: 332,
    height: 416,
    //borderRadius: 30,
    borderTopEndRadius: 30,
    borderTopLeftRadius: 30,

    // alignItems: 'center',
  },
  rectShapeView: {
    width: 80,
    height: 60,
    backgroundColor: '#EFEFEF',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  BottomBar: {
    width: 332,
    height: 117,
    backgroundColor: '#FFFFFF',
    borderBottomEndRadius: 30,
    borderBottomLeftRadius: 30,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  textView: {
    width: 80,
    height: 12,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lastText: {
    fontSize: 10,
    fontWeight: '600',
    color: 'color: rgba(0, 0, 0, 0.5)',
  },
});

export default HomeScreen;
