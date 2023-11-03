import ProductStack from "./navigation/ProductStack";
import { NavigationContainer } from "@react-navigation/native";
import { useCartStore } from "./store/CartStore";
import { useEffect } from "react";


export default function App() {

  const loadCart = useCartStore((state) => state.loadCart);

  useEffect(() => {
    loadCart();
  }, []);

  return (
    <NavigationContainer>
      <ProductStack />
    </NavigationContainer>
  );
}
