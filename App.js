import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import 'react-native-gesture-handler';

//Screen
import HomePage from './navigation/screen/HomePage';
import MenuPage from './navigation/screen/MenuPage';
import HeaderBar from './components/common/HeaderBar';
import ProductPage from './navigation/screen/ProductPage';
import MainContainer from './navigation/MainContainer';
import store from './store';
import DetailProduct from './navigation/screen/DetailProduct';
import CartScreen from './navigation/screen/CartScreen';
import RevenueScreen from './navigation/screen/RevenueScreen';

const Tab = createBottomTabNavigator()
const Stack = createStackNavigator();
const homeName = "Trang chủ"
const productName = "Sản phẩm"
const menuName = "Menu"
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <HeaderBar />
        <Stack.Navigator
         initialRouteName='Home'>
          <Stack.Screen
              name="Home" 
              component={MainContainer} 
              options={{headerShown:false}}/>
          <Stack.Screen
              name="DetailProduct" 
              component={DetailProduct} 
              options={{title:"Chi tiết sản phẩm"}}/> 
          <Stack.Screen
          name="CartScreen" 
          component={CartScreen} 
          options={{title:"Giỏ hàng"}}/> 
          <Stack.Screen
          name="RevenueScreen" 
          component={RevenueScreen} 
          options={{title:"Thanh Toán"}}/> 
        </Stack.Navigator>
      </NavigationContainer>
      
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
