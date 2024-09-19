import {StyleSheet} from 'react-native';
import {colors, metrics} from '../../res';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: metrics.spacing.xxx_small,
    paddingHorizontal: metrics.spacing.xx_small,
    borderRadius: metrics.radius.small,
    backgroundColor: colors.secondary.light,
  },
  tagText: {
    fontSize: metrics.font_size.x_small,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});
