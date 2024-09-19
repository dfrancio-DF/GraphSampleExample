import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { styles } from './styles';

import { Products } from '../../database/products';

export const ProductsScreen = () => {
  return (
    <View>
      <ScrollView>
        {Products.map((item) => {
          return (
            <View style={{ flex: 1, borderBottomColor: 'red', borderBottomWidth: 2, marginHorizontal: 12, justifyContent: 'center' }} key={item.id}>
              <Text numberOfLines={1} style={{ fontSize: 24, fontWeight: '400' }}>{item.nome}</Text>
            </View>
          )
        })}
      </ScrollView>
    </View>
  );
};
