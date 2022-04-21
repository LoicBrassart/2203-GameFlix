import SearchBar from "@components/SearchBar";
import Toggle from "@components/Toggle";
import Avatar from "@components/Avatar";
import SNavBar from "./style";

export default function NavBar() {
  return (
    <SNavBar>
      <img src="" alt="" />
      <Toggle />
      <nav>
        <ul>
          <li>Jeux</li>
          <li>News</li>
          <li>Evenements</li>
          <li>Outils</li>
        </ul>
      </nav>
      <SearchBar />
      <Avatar />
    </SNavBar>
  );
}
