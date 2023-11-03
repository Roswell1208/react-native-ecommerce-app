// Components
import ProductList from "../components/Products/ProductList";
import ProductDetails from "../components/Products/ProductDetails";
import Cart from "../components/Cart/Cart";
import CartButton from "../components/Cart/CartButton";

// React Navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function ProductStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerRight: () => <CartButton />,
        headerStyle: {
          backgroundColor: "rgb(48,48,48)",
        },
        headerTintColor: 'white',
      }}
    >
      <Stack.Screen
        name="Produits"
        component={ProductList}
        
      />
      <Stack.Screen name="Details" component={ProductDetails} />
      <Stack.Screen name="Panier" component={Cart} />
    </Stack.Navigator>
  );
}