import { CreditCard } from "./components/credit-card/CreditCard";
import "./styles/styles.scss";
import { Provider } from "react-redux";
import { getStore } from "./redux/store/store";

function App() {
  return (
    <Provider store={getStore()}>
      <CreditCard />
    </Provider>
  );
}

export default App;
