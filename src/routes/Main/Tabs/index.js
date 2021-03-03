import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

import List from '~/screens/Main/List';
import Reports from '~/screens/Main/Reports';

import { colors } from '~/styles';

const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: colors.primary,
        inactiveTintColor: 'gray',
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const icons = {
            List: 'exchange-alt',
            Reports: 'chart-pie',
          };

          return (
            <FontAwesome5Icon
              name={icons[route.name]}
              color={color}
              size={size}
            />
          );
        },
      })}
    >
      <Tab.Screen
        name="List"
        component={List}
        options={{
          title: 'Lançamentos',
        }}
      />
      <Tab.Screen
        name="Reports"
        component={Reports}
        options={{
          title: 'Gráficos',
        }}
      />
    </Tab.Navigator>
  );
}

export default Tabs;
