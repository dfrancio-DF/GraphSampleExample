import {StyleSheet} from 'react-native';
import {metrics} from '../../res';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: metrics.font_size.small,
    fontWeight: 'bold',
  },
  subtitleText: {
    fontSize: metrics.font_size.xx_small,
    fontWeight: 'bold',
  },
});
