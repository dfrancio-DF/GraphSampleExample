import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../res';

export const styles = StyleSheet.create({
  loadingArea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    paddingTop: metrics.spacing.small,
    paddingHorizontal: metrics.spacing.small,
  },
  about: {
    fontSize: metrics.font_size.small,
    fontWeight: 'bold',
    textAlign: 'right',
    color: colors.secondary.dark,
    marginBottom: metrics.spacing.xx_small,
  },
  inputArea: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: metrics.spacing.x_large,
    width: '100%',
    marginBottom: metrics.spacing.xx_small,
    borderWidth: metrics.border.small,
    borderTopLeftRadius: metrics.radius.small,
    borderBottomLeftRadius: metrics.radius.small,
  },
  input: {
    width: '85%',
    paddingHorizontal: metrics.spacing.xx_small,
  },
  addButton: {
    width: 60,
    height: metrics.spacing.x_large,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.warning.default,
    borderWidth: metrics.border.small,
    borderTopRightRadius: metrics.radius.small,
    borderBottomRightRadius: metrics.radius.small,
  },
  tagsArea: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: metrics.spacing.xx_small,
    marginBottom: metrics.spacing.small,
  },
  listArea: {
    flexGrow: 1,
    paddingBottom: metrics.spacing.small,
  },
  listSeparator: {
    height: metrics.spacing.xx_small,
  },

  chart: {
    flex: 1,
    // backgroundColor: '#fff',
    height: 200,
    //width: '90%',
  },

  table: {
    backgroundColor: '#ECECEC',
    borderRadius: 15,
  },
  titleTable: {
    textAlign: 'right',
    color: '#9C9B9B',
  },
  textTable: {
    textAlign: 'center',
    color: '#9C9B9B',
  },


});
