import "./Navbar.css";
const Navbar = () => {
  const ListOfItems = ["Gmail", "Images"];
  return (
    <div className="navbar">
      {ListOfItems.map((item) => (
        <ul className="item">{item}</ul>
      ))}
      <img
        src="https://lh3.googleusercontent.com/ogw/AOh-ky3TIXk7101dgABfIfIU5OLqq_COqmrddNFsMy8e=s32-c-mo"
        alt=""
      />
    </div>
  );
};

export default Navbar;
