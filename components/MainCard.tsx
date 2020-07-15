/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {COLOR} from '../utils/constants';
import {Image, View, Text, StyleSheet} from 'react-native';

const NetworkIcon = require('../assets/images/ic_connection_full_16.png');

type Props = {
  data: Data;
};

const MainCard: React.FC<Props> = ({data}: Props) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
          height: 35,
        }}>
        <View style={styles.iconBack}>
          <Image
            source={data.image}
            style={{width: 24, height: 24, tintColor: COLOR.ICON}}
          />
        </View>

        <Image
          source={NetworkIcon}
          style={{width: 20, height: 20, tintColor: COLOR.ICON}}
        />
      </View>

      <Text
        style={{
          color: '#597088',
          fontSize: 12,
          fontWeight: 'bold',
          marginTop: -30,
          marginLeft: 10,
        }}>
        {data.id}
      </Text>

      <Text
        style={{
          color: '#002449',
          fontSize: 14,
          fontWeight: 'bold',
          marginTop: 5,
          marginLeft: 10,
        }}>
        {data.name}
      </Text>

      <View style={{flex: 1, flexDirection: 'row-reverse'}}>
        <Text
          style={{
            color: '#002449',
            fontSize: 24,
            fontWeight: 'bold',
            margin: 5,
          }}>
          {data.value}
        </Text>
      </View>
    </View>
  );
};
export default MainCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    height: 155,
    width: 155,
    backgroundColor: 'white',
    elevation: 4,
    margin: 10,
  },

  iconBack: {
    backgroundColor: `${COLOR.ICON_BACK}`,
    width: 32,
    height: 32,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
