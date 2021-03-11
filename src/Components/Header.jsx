import "../styles/Header.scss";
import Find from "./Find";
import Lingua from "./Lingua";

function Header() {
  const searchOffer = (value) => {
    const APIKey = process.env.REACT_APP_CLIENT_ID;
    const APISecret = process.env.REACT_APP_CLIENT_SECRET;
    console.log(APIKey);
    fetch(
      `https://api.github.com/search/users?q=${value}&client_id=${APIKey}&client_secret=${APISecret}`
    )
      .then((res) => res.json())
      .then((data) => setUsers(data.items));
  };

  return (
    <>
      <div className="find">
        <Find
          searchOffer={searchOffer}
          /* giveOffer={giveOffer}
          searchCity={searchCity} */
        />
        <Lingua />
      </div>
    </>
  );
}
export default Header;
