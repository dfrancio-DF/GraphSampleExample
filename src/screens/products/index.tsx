import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { styles } from './styles';

import { Products } from '../../database/products';
import DropDownPicker from 'react-native-dropdown-picker';

export const ProductsScreen = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: 'Apple', value: 'apple' },
    { label: 'Banana', value: 'banana' },
    { label: 'Pear', value: 'pear' },
  ]);

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          //flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          paddingHorizontal: 15,
        }}>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder={'Choose a fruit.'}
        />
      </View>

      <View style={{
        //flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Text>Chosen fruit: {value === null ? 'none' : value}</Text>
      </View>

      <View>
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
      </View>
    </View>

  );
};
