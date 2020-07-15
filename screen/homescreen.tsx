/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect} from 'react';
import {
  Image,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Swiper from 'react-native-swiper';
import {ThunkDispatch} from 'redux-thunk';
import {bindActionCreators} from 'redux';

import MainCard from '../components/MainCard';
import {COLOR} from '../utils/constants.ts';
import {Sensor} from '../types/Sensor.ts';
import {AppState, GET_SENSORS} from '../store/index';
import {AppActions} from '../types/actions.ts';
import {startSetExpense} from '../actions/sensors.ts';
import {useDispatch, useSelector, State} from '../store/types.ts';

const LeftIcon = require('../assets/images/ic_chevron_left_28.png');
const EditIcon = require('../assets/images/ic_pencil_2_28.png');
const PowerIcon = require('../assets/images/ic_power_plug_2_16.png');
const NetworkIcon = require('../assets/images/ic_connection_full_16.png');
const GatewayIcon = require('../assets/images/ic_gateway_24.png');
const TemperatureIcon = require('../assets/images/ic_sensor_temperature_inside_24.png');
const TemperatureOutsideIcon = require('../assets/images/ic_sensor_temperature_outside_24.png');
const HumidityIcon = require('../assets/images/ic_sensor_humidity_24.png');
const WaterMeterIcon = require('../assets/images/ic_sensor_water_meter_2_24.png');

const CloseIcon = require('../assets/images/ic_close_16.png');

const DATA = [
  {
    id: '120600201',
    image: TemperatureIcon,
    name: 'TempIn1',
    value: '62°',
  },
  {
    id: '734523412',
    image: WaterMeterIcon,
    name: 'Water 1',
    value: '357,142',
  },
  {
    id: '120600253',
    image: TemperatureOutsideIcon,
    name: 'TempOut1',
    value: '75°',
  },
  {
    id: '645060856',
    image: HumidityIcon,
    name: 'Humidity1',
    value: '62%',
  },
];

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();
  const [selectedId, setSelectedId] = useState(null);
  const sensors = useSelector((state: State) => {
    console.log('inside selectorrrrr', state.sensors);
    return state.sensors;
  });

  useEffect(() => {
    const payload = {
      gatewayIMEINumber: '866834041025649',
    };
    //dispatch(startSetExpense(payload));

    dispatch({type: GET_SENSORS, payload});
  }, []);

  const renderItem = ({item}) => {
    return <MainCard data={item} />;
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <Swiper
            style={styles.wrapper}
            showsButtons={false}
            activeDot={
              <View
                style={{
                  backgroundColor: '#d71440',
                  width: 14,
                  height: 8,
                  borderRadius: 4,
                  marginLeft: 3,
                  marginRight: 3,
                  marginTop: 3,
                  marginBottom: 3,
                }}
              />
            }>
            <View style={styles.slide1}>
              <View style={styles.header}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    padding: 10,
                  }}>
                  <Image
                    source={LeftIcon}
                    style={{width: 30, height: 30, tintColor: COLOR.ICON}}
                  />
                  <Image
                    source={EditIcon}
                    style={{width: 30, height: 30, tintColor: COLOR.ICON}}
                  />
                </View>

                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 10,
                    marginTop: -90,
                  }}>
                  <View style={styles.row}>
                    <Image
                      source={PowerIcon}
                      style={{width: 16, height: 16, marginRight: 5}}
                    />
                    <Text>Power ON</Text>
                  </View>

                  <View style={styles.circle}>
                    <Image
                      source={GatewayIcon}
                      style={{width: 30, height: 30, tintColor: COLOR.ICON}}
                    />
                  </View>

                  <View style={styles.row}>
                    <Text>Network</Text>
                    <Image
                      source={NetworkIcon}
                      style={{
                        width: 16,
                        height: 16,
                        tintColor: COLOR.ICON,
                        marginLeft: 5,
                      }}
                    />
                  </View>
                </View>

                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{color: '#597088', fontSize: 20}}>
                    Gateway #5123
                  </Text>
                  <Text
                    style={{
                      color: '#002449',
                      fontSize: 30,
                      fontWeight: 'bold',
                    }}>
                    North Yellow Barn 1
                  </Text>

                  <View
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'center',
                      alignItem: 'center',
                    }}
                  />
                </View>
              </View>
            </View>
            <View style={styles.slide2} />
            <View style={styles.slide3} />
            <View style={styles.slide2} />
            <View style={styles.slide3} />
          </Swiper>
        </View>

        <Text
          style={{
            color: '#597088',
            fontSize: 14,
            fontWeight: 'bold',
            margin: 16,
          }}>
          Last update 08:32:14
        </Text>

        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          extraData={selectedId}
          style={{paddingLeft: 16, paddingRight: 16}}
          numColumns={2}
        />

        <View style={{height: 20}} />

        <View style={{backgroundColor: '#e6e9ed', padding: 10}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                color: '#002449',
                fontSize: 16,
                fontWeight: 'bold',
                margin: 5,
              }}>
              Add sensors
            </Text>

            <View style={styles.circleCard}>
              <Image
                source={CloseIcon}
                style={{
                  width: 16,
                  height: 16,
                  tintColor: COLOR.ICON,
                }}
              />
            </View>
          </View>

          <Text
            style={{
              color: '#334f6d',
              fontSize: 14,
              marginLeft: 6,
              marginRight: 6,
            }}>
            Sensors have to be paired it with the gateway according to the
            instructions.
          </Text>

          <TouchableOpacity style={styles.buttonCard}>
            <Text
              style={{
                color: '#002449',
                fontSize: 14,
                fontWeight: 'bold',
                margin: 5,
              }}>
              Learn how
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{height: 20}} />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: `${COLOR.LIGHT_GREY}`,
  },
  header: {
    flex: 1,
    height: 300,
    backgroundColor: 'white',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
  },

  circle: {
    backgroundColor: `${COLOR.ICON_BACK}`,
    width: 72,
    height: 72,
    borderRadius: 72 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 50,
    marginLeft: 50,
  },

  circleCard: {
    backgroundColor: `${COLOR.WHITE}`,
    width: 32,
    height: 32,
    borderRadius: 32 / 2,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    marginRight: 10,
  },

  buttonCard: {
    alignSelf: 'center',
    backgroundColor: `${COLOR.WHITE}`,
    width: 100,
    height: 32,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
    marginRight: 10,
    marginTop: 5,
  },
  wrapper: {
    height: 300,
  },
  slide1: {
    flex: 1,
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
