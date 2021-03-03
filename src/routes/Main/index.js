import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Form from '~/screens/Main/Form';

import { colors } from '~/styles';
import HeaderLogo from '~/components/HeaderLogo/index';
import Tabs from './Tabs';

const Stack = createStackNavigator();

const screenOptionsDefault = {
  headerStyle: {
    backgroundColor: colors.primary,
  },
  headerTintColor: colors.white,
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

function MainStack() {
  return (
    <Stack.Navigator screenOptions={screenOptionsDefault}>
      <Stack.Screen
        name="Home"
        options={{ headerTitle: (props) => <HeaderLogo {...props} /> }}
        component={Tabs}
      />
      <Stack.Screen
        name="Form"
        options={{
          title: 'Cadastro',
        }}
        component={Form}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
