import { StyleSheet } from 'react-native';
import theme from '../../global/styles/theme';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  stockInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 24,
  },

  iconContainer: {
    width: 80,
    height: 80,

    justifyContent: 'center',
    alignItems: 'center',

    borderColor: theme.colors.base100,
    borderWidth: 1,
    borderRadius: 20,
  },

  stockInfoTestContainer: {
    gap: 4,
  },

  symbol: {
    color: theme.colors.base300,

    fontWeight: 'bold',
  },

  date: {
    color: theme.colors.base200,

    fontSize: 12,
  },

  price: {
    color: theme.colors.base300,

    fontSize: 16,
    fontWeight: 'bold',
  },
});
