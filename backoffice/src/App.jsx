import { Admin, Resource, ListGuesser } from "react-admin";
import dataProvider from "./dataProvider";
import authProvider from "./authProvider";

function App() {
  return (
    <Admin dataProvider={dataProvider} /*authProvider={authProvider}*/>
      <Resource name="boardGames" list={ListGuesser} />
    </Admin>
  );
}

export default App;
