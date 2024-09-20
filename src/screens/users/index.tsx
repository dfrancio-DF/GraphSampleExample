import React from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { RootRoutes, UsersNavigationProp } from '../../routes/types';

import { Users } from '../../database/users';

export const UsersScreen = () => {
  const navigation = useNavigation<UsersNavigationProp>();

  handleUserClick = async (userId) => {
    console.log(`user screen - userId:${userId}`);
    navigation.navigate(RootRoutes.USER_GRAPH, { userID: userId });
    console.log(navigation.getState());
  }

  return (
    <View>
      <ScrollView>
        {Users.map((item) => {
          if (item.tipo !== "cliente") {
            return;
          }
          return (
            <View style={{ flex: 1, borderBottomColor: 'yellow', borderBottomWidth: 2, marginHorizontal: 12, justifyContent: 'center' }} key={item.id}>
              <TouchableOpacity onPress={() => { this.handleUserClick(item.id) }}>
                <Text numberOfLines={1} style={{ fontSize: 24, fontWeight: '400' }}>{item.nome}</Text>
              </TouchableOpacity>
            </View>
          )
        })}
      </ScrollView>
    </View>
  );
};
