import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Keyboard,
  Text,
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



export const HomeScreen = () => {
  const [tag, setTag] = useState<string>('');

  const navigation = useNavigation<AboutNavigationProp>();
  const { addTagToStorage, clearTags, tags } = useTags();
  const { fetchVideosByTag, hasErrorFetchingVideos, isFetchingVideos, videos } =
    useVideo();


  const [tableItems, setTableItems] = useState([]);

  useEffect(() => {
    mountTable();
  }, []);

  function mountTable() {
    //["Data", "Usuário", "Pontos", "Produto", "Transação", "empresa"]}
    var tableData = [];
    for (var i = 0; i < Transactions.length; i++) {
      var obj = {
        data: Transactions[i].data,
        usuario: Users.find(item => item.id === Transactions[i].usuario_id)?.nome,
        pontos: Transactions[i].pontos_movimentados,
        produto: Products.find(item => item.id === Transactions[i].produto_id)?.nome,
        transacao: Transactions[i].tipo,
        empresa: Users.find(item => item.id === Transactions[i].empresa_id)?.nome,
      }
      //      console.log(obj);
      tableData.push(obj);
    }
    setTableItems(tableData);
    console.log("teste");
    console.log(tableItems);

  }

  console.log(tableItems);

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

  console.log(tableItems);

  return (
    <View style={styles.container}>
      <View style={styles.rowButons}>
        <Text onPress={navigateToProductsScreen} style={styles.about}>
          Produtos
        </Text>
        <Text onPress={navigateToUsersScreen} style={styles.about}>
          Usuarios
        </Text>
        <Text onPress={navigateToAboutScreen} style={styles.about}>
          Sobre
        </Text>
      </View>

      <View>
        <ScrollView>
          <LineChart style={styles.chart}
            data={{ dataSets: [{ label: "demo", values: [{ y: 1 }, { y: 2 }, { y: 1 }] }] }}
          />
          <HorizontalBarChart style={styles.chart}
            data={{ dataSets: [{ label: "demo", values: [{ y: 1 }, { y: 2 }, { y: 1 }] }] }}
          />

          <ScrollView horizontal={true}>
            <View>
              <Table borderStyle={{ borderWidth: 3, borderColor: '#fff' }} style={styles.table}>
                <Row data={["Data", "Usuário", "Pontos", "Produto", "Transação", "empresa"]} style={styles.head} textStyle={styles.titleTable} />
              </Table>

              <ScrollView style={styles.dataWrapper}>
                <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                  {tableItems.map((item) => {
                    return (
                      <TableWrapper style={{ flexDirection: 'row' }}>
                        <Col data={[item.data]} textStyle={styles.text}></Col>
                        <Col data={[item.usuario]} textStyle={styles.text}></Col>
                        <Col data={[item.pontos]} textStyle={styles.text}></Col>
                        <Col data={[item.produto]} textStyle={styles.text}></Col>
                        <Col data={[item.transacao]} textStyle={styles.text}></Col>
                        <Col data={[item.empresa]} textStyle={styles.text}></Col>
                      </TableWrapper>
                    )
                  })}
                </Table>
              </ScrollView>
            </View>
          </ScrollView>

          {
            Products.map((item) => {
              return (
                <View style={{ flex: 1, borderBottomColor: 'red', borderBottomWidth: 2, marginHorizontal: 12, justifyContent: 'center' }} key={item.id}>
                  <Text numberOfLines={1} style={{ fontSize: 24, fontWeight: '400' }}>{item.nome}</Text>
                </View>
              )
            })
          }

          {
            Transactions.map((item) => {
              return (
                <View style={{ flex: 1, borderBottomColor: 'blue', borderBottomWidth: 2, marginHorizontal: 12, justifyContent: 'center' }} key={item.id}>
                  <Text numberOfLines={1} style={{ fontSize: 24, fontWeight: '400' }}>{item.data}</Text>
                </View>
              )
            })
          }

          {
            Users.map((item) => {
              return (
                <View style={{ flex: 1, borderBottomColor: 'yellow', borderBottomWidth: 2, marginHorizontal: 12, justifyContent: 'center' }} key={item.id}>
                  <Text numberOfLines={1} style={{ fontSize: 24, fontWeight: '400' }}>{item.nome}</Text>
                </View>
              )
            })
          }
        </ScrollView >
      </View >


    </View >
  );
};





