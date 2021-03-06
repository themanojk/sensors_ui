/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';

import React from 'react';
import {Provider} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

import HomeScreen from './screen/homescreen';
import SettingsScreen from './screen/settingscreen';

import {store} from './store';

import {Image} from 'react-native';

const HomeIcon = require('./assets/images/ic_dashboard_24.png');
const SettingsIcon = require('./assets/images/ic_settings_24.png');

const Tab = createBottomTabNavigator();
function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: '#e91e63',
          }}>
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({color, size}) => (
                <Image
                  source={HomeIcon}
                  style={{width: 24, height: 24, tintColor: '#e91e63'}}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Settings"
            component={SettingsScreen}
            options={{
              tabBarLabel: 'Settings',
              tabBarIcon: ({color, size}) => (
                <Image
                  source={SettingsIcon}
                  style={{width: 24, height: 24, tintColor: '#597088'}}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
