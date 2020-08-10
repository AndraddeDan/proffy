import React from 'react';
import { createBottomTabNavigator, BottomTabBarOptions } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs() {

  const style: BottomTabBarOptions = {
    style: {
      elevation: 0,
      shadowOpacity: 0,
      heigth: 64
    },
    tabStyle: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center"
    },
    iconStyle: {
      flex: 0,
      width: 25,
      height: 25
    },
    labelStyle: {
      fontFamily: "Archivo_700Bold",
      fontSize: 13,
      marginLeft: 16
    },
    inactiveBackgroundColor: "#fafafc",
    activeBackgroundColor: "#ebebf5",
    inactiveTintColor: "#c1bccc",
    activeTintColor: "#32264d"
  }

  return (
    <Navigator tabBarOptions={style}>
      <Screen
        name="TeacherList"
        component={TeacherList}
        options={{
          tabBarLabel: 'Proffys',
          tabBarIcon: ({ color, size, focused }) => <Ionicons name="ios-easel" size={size} color={focused ? '#8257e5' : color} />
        }}></Screen>
      <Screen name="Favorites" component={Favorites}
        options={{
          tabBarLabel: 'Favoritos',
          tabBarIcon: ({ color, size, focused }) => <Ionicons name="ios-heart" size={size} color={focused ? '#8257e5' : color} />
        }}></Screen>
    </Navigator>
  );
}

export default StudyTabs;
