import useCartModel from "./Cart.model";
import CartView from "./Cart.view";

export default function Home() {
  const methodsUser = useCartModel();
  return <CartView {...methodsUser} />
}