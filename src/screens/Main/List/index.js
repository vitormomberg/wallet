import React, { useCallback, useEffect, useState } from 'react';
import { RefreshControl, StatusBar } from 'react-native';
import {
  useNavigation,
  useFocusEffect,
  useIsFocused,
} from '@react-navigation/native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import { useSelector, useDispatch } from 'react-redux';

import { fetchInvestments } from '~/controllers/investments/fetch';
import { colors } from '~/styles/index';
import { actions } from '~/reducers/user';

import Loading from '~/components/Loading';
import EmptyData from './components/EmptyData';
import ItemList from './components/ItemList';

import * as S from './styles';

function List() {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const user = useSelector((state) => state.user);
  const investments = useSelector((state) => state.investments);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const getInvestments = useCallback(async () => {
    await dispatch(fetchInvestments(user.uid));

    setLoading(false);
    setRefreshing(false);
  }, [user, dispatch]);

  useEffect(() => {
    getInvestments();
  }, [getInvestments]);

  useFocusEffect(() => {
    if (!isFocused) {
      setRefreshing(true);
      getInvestments();
    }
  });

  function onLogout() {
    dispatch(actions.logout());
  }

  if (loading) {
    return <Loading color={colors.primary} />;
  }

  return (
    <S.Container>
      <StatusBar animated backgroundColor={colors.primary} />
      <S.ListItems
        refreshControl={
          <RefreshControl
            colors={[colors.primary]}
            onRefresh={() => {
              setRefreshing(true);
              getInvestments();
            }}
            refreshing={refreshing}
          />
        }
        ListEmptyComponent={<EmptyData />}
        data={investments.list}
        keyExtractor={(item) => item.date.toISOString() + item.value}
        renderItem={({ item }) => <ItemList {...item} />}
      />

      <S.ButtonAdd onPress={() => navigate('Form')}>
        <FontAwesome5Icon name="plus" color={colors.white} size={24} />
      </S.ButtonAdd>
      <S.ButtonLogout onPress={onLogout}>
        <FontAwesome5Icon name="sign-out-alt" color={colors.white} size={24} />
      </S.ButtonLogout>
    </S.Container>
  );
}

export default List;
