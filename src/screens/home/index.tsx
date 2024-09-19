import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Keyboard,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SearchTag, VideoItem } from '../../components';
import { styles } from './styles';
import { colors } from '../../res';
import { useTags, useVideo } from '../../hooks';
import { AboutNavigationProp, RootRoutes, ProductsNavigationProp, UsersNavigationProp } from '../../routes/types';

import { HorizontalBarChart, LineChart } from 'react-native-charts-wrapper';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';

import { Products } from '../../database/products';
import { Transactions } from '../../database/transactions';
import { Users } from '../../database/users';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';




export const HomeScreen = () => {
  const [tag, setTag] = useState<string>('');

  const navigation = useNavigation<AboutNavigationProp>();
  const { addTagToStorage, clearTags, tags } = useTags();
  const { fetchVideosByTag, hasErrorFetchingVideos, isFetchingVideos, videos } =
    useVideo();



  useEffect(() => {
    //etchVideosByTag(tags[0]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function navigateToAboutScreen() {
    navigation.navigate(RootRoutes.ABOUT);
  }

  function navigateToProductsScreen() {
    navigation.navigate(RootRoutes.PRODUCTS);
  }

  function navigateToUsersScreen() {
    navigation.navigate(RootRoutes.USERS);
  }

  function onPressAddButton() {
    addTagToStorage(tag);
    Keyboard.dismiss();
  }

  function handleListSeparator() {
    return <View style={styles.listSeparator} />;
  }

  function renderTags() {
    return (
      <View style={styles.tagsArea}>
        {tags.map(tag => (
          <SearchTag
            key={tag}
            tag={tag}
            onPress={() => fetchVideosByTag(tag)}
          />
        ))}
        {!!tags.length && <Text onPress={clearTags}>Limpar...</Text>}
      </View>
    );
  }

  if (isFetchingVideos) {
    return (
      <View style={styles.loadingArea}>
        <ActivityIndicator size="large" color={colors.secondary.light} />
      </View>
    );
  }

  if (hasErrorFetchingVideos) {
    return (
      <View style={styles.loadingArea}>
        <Text>Ops!</Text>
        <Text>
          Aconteceu um erro ao realizar a consulta! Por favor, tente novamente
          mais tarde.
        </Text>
      </View>
    );
  }

  var tableHead = ['Head', 'Head2', 'Head3', 'Head4', 'Head5', 'Head6', 'Head7', 'Head8', 'Head9'];
  var tableData = [40, 60, 80, 100, 120, 140, 160, 180, 200];

  //console.log(Products.at(0).id);

  return (
    <View style={styles.container}>
      <Text onPress={navigateToAboutScreen} style={styles.about}>
        Sobre
      </Text>
      <Text onPress={navigateToProductsScreen} style={styles.about}>
        Produtos
      </Text>
      <Text onPress={navigateToUsersScreen} style={styles.about}>
        Usuarios
      </Text>
      {/* <View style={styles.inputArea}>
        <TextInput
          onChangeText={setTag}
          placeholder="Digite a tag..."
          value={tag}
          style={styles.input}
          onSubmitEditing={() => addTagToStorage(tag)}
        />
        <TouchableOpacity onPress={onPressAddButton} style={styles.addButton}>
          <Text>Add</Text>
        </TouchableOpacity>
      </View> */}
      {/* <FlatList
        contentContainerStyle={styles.listArea}
        data={videos}
        ItemSeparatorComponent={handleListSeparator}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <VideoItem {...item} />}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={renderTags()}
      /> */}

      <View>
        <ScrollView>

          <LineChart style={styles.chart}
            data={{ dataSets: [{ label: "demo", values: [{ y: 1 }, { y: 2 }, { y: 1 }] }] }}
          />
          <HorizontalBarChart style={styles.chart}
            data={{ dataSets: [{ label: "demo", values: [{ y: 1 }, { y: 2 }, { y: 1 }] }] }}
          />


          <Table borderStyle={{ borderWidth: 3, borderColor: '#fff' }} style={styles.table}>
            <TableWrapper style={{ flexDirection: 'row' }}>
              <Col data={["teste"]} textStyle={styles.titleTable}></Col>
              <Col data={["teste teste"]} textStyle={styles.textTable}></Col>
            </TableWrapper>
            <TableWrapper style={{ flexDirection: 'row' }}>
              <Col data={["teste"]} textStyle={styles.titleTable}></Col>
              <Col data={["teste teste"]} textStyle={styles.textTable}></Col>
            </TableWrapper>
            <TableWrapper style={{ flexDirection: 'row' }}>
              <Col data={["teste"]} textStyle={styles.titleTable}></Col>
              <Col data={["teste teste"]} textStyle={styles.textTable}></Col>
            </TableWrapper>
          </Table>

          {Products.map((item) => {
            return (
              <View style={{ flex: 1, borderBottomColor: 'red', borderBottomWidth: 2, marginHorizontal: 12, justifyContent: 'center' }} key={item.id}>
                <Text numberOfLines={1} style={{ fontSize: 24, fontWeight: '400' }}>{item.nome}</Text>
              </View>
            )
          })}

          {Transactions.map((item) => {
            return (
              <View style={{ flex: 1, borderBottomColor: 'blue', borderBottomWidth: 2, marginHorizontal: 12, justifyContent: 'center' }} key={item.id}>
                <Text numberOfLines={1} style={{ fontSize: 24, fontWeight: '400' }}>{item.data}</Text>
              </View>
            )
          })}

          {Users.map((item) => {
            return (
              <View style={{ flex: 1, borderBottomColor: 'yellow', borderBottomWidth: 2, marginHorizontal: 12, justifyContent: 'center' }} key={item.id}>
                <Text numberOfLines={1} style={{ fontSize: 24, fontWeight: '400' }}>{item.nome}</Text>
              </View>
            )
          })}
        </ScrollView>
      </View>


    </View >

  );
};





