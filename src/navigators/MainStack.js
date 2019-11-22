import { createStackNavigator } from 'react-navigation-stack';

import View from '../screens/view/View';
import Cadastro from '../screens/cadastro/Cadastro';

const MainStack = createStackNavigator({
  View: {
    screen: View
  },
  Cadastro: {
    screen: Cadastro
  },
});

export default MainStack;