import "./App.css";
import Header from "./components/Header";
// import User from "./components/User";
import SingleUser from "./components/SingleUser";

function App() {
  const people = [
    {
      name: "Parisa",
      age: 30,
      phone: "7032224545",
      single: false,
    },
    {
      name: "Sarah",
      age: 39,
      phone: "70322654345",
      single: true,
    },
    {
      name: "Olivia",
      age: 24,
      phone: "5712224545",
      single: true,
    },
  ];
  return (
    <>
      <div className="container">
        <Header />
        {/* <User /> */}
        <div className="containerr">
          <ul className="wrapper">
            {people.map((person, i) => {
              <SingleUser person={person} key={i} />;
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
