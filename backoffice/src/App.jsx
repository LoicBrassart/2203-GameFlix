import { Admin, Resource } from "react-admin";
import {
  BoardgameList,
  BoardgameEdit,
  BoardgameCreate,
} from "@components/boardGames";
// import { CreatorEdit, CreatorList } from "@components/creators";
import dataProvider from "./dataProvider";
import authProvider from "./authProvider";

function App() {
  return (
    <Admin dataProvider={dataProvider} authProvider={authProvider}>
      <Resource
        name="boardGames"
        list={BoardgameList}
        edit={BoardgameEdit}
        create={BoardgameCreate}
      />
    </Admin>
  );
}

export default App;
