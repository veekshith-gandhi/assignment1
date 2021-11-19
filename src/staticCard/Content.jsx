import Header from "./Header";
import List from "./List";

const Content = () => {
  return (
    <div style={{ width: "20%", margin: "auto" }}>
      <Header title="Mobile Opertating System" />
      <ul>
        <List title="Android" />
        <List title="Blackbery" />
        <List title="Windows Phone" />
        <List title="Iphone" />
      </ul>
      <Header title="Mobile Manufactures" />
      <ul>
        <List title="HTC" />
        <List title="Micromax" />
        <List title="Samsung" />
        <List title="Apple" />
      </ul>
    </div>
  );
};
export default Content;
