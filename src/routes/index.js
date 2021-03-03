import React, { useCallback, useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSelector, useDispatch } from 'react-redux';

import SignIn from '~/screens/Auth/SignIn';
import InitialLoading from '~/screens/InitialLoading';

import { colors } from '~/styles';
import MainStack from './Main';
import { actions } from '~/reducers/user';

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

function Router() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const [loading, setLoading] = useState(true);

  const verifyUserLogged = useCallback(async () => {
    const uid = await AsyncStorage.getItem('@uid');

    if (uid) {
      dispatch(actions.setAuth(true));
    }

    setLoading(false);
  }, [dispatch]);

  useEffect(() => {
    verifyUserLogged();
  }, [verifyUserLogged]);

  if (loading) {
    return <InitialLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptionsDefault}>
        {!user.isAuthenticated ? (
          <Stack.Screen
            options={{ headerShown: false }}
            name="SigIn"
            component={SignIn}
          />
        ) : (
          <Stack.Screen
            options={{ headerShown: false }}
            name="Main"
            component={MainStack}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
