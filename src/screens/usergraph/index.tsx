import React from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { styles } from './styles';
import { HorizontalBarChart, LineChart } from 'react-native-charts-wrapper';
import moment from 'moment';

import { Users } from '../../database/users';
import { Transactions } from '../../database/transactions';

import { UserGraphNavigationProp } from '../../routes/types';
import { useRoute } from '@react-navigation/native';

export const UserGraphScreen = () => {
  console.log("Tela User Graph");

  const route = useRoute<UserGraphNavigationProp>();
  const { userID } = route.params;
  console.log(userID);

  var measuresData = [];

  var userName = Users.find(item => item.id === userID)?.nome;
  console.log(userName);

  for (var i = 0; i < Transactions.length; i++) {
    if (Transactions[i].usuario_id === userID) {
      //console.log(Transactions[i].pontos_movimentados);
      //console.log(Transactions[i].data);
      //console.log(moment(Transactions[i].data.split(' ')[0].replace(/-/g, '/'), 'YYYY/MM/DD').unix('X'));
      //console.log("-----------------");
      var obj = { y: Transactions[i].pontos_movimentados, x: moment(Transactions[i].data.split(' ')[0].replace(/-/g, '/'), 'YYYY/MM/DD').unix('X') };
      measuresData.push(obj);
    }
  }
  console.log(measuresData);


  return (

    < View >
      <ScrollView>
        <LineChart style={styles.chart}
          data={{
            dataSets: [{
              values: measuresData,
              label: `Pontuação de ${userName}`,
            }],

          }}
          chartDescription={{
            text: '',
          }}
          xAxis={{
            position: 'BOTTOM',
            axisLineWidth: 0,
            drawGridLines: true,
            granularityEnabled: true,
            granularity: 1,
            drawLabels: true,
            valueFormatter: 'date',
            valueFormatterPattern: 'dd-MM-yy',
            //since: 0,
            timeUnit: 'SECONDS',
            gridDashedLine: {
              lineLength: 8,
              spaceLength: 10,
            }

          }}
        />

      </ScrollView>
    </View >
  );
};
