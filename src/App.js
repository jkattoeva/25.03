import List from "./component/List/List";
function App() {
  const veggies = ["Carrot", "Potato", "Strawberry"];
  const fruits = [
    { name: "Mango", color: "Yellow"},
    { name: "Apple", color: "Green"},
    { name: "Cherry", color: "Red"},
  ];

  const veggiesList = veggies.map((veggie) => {
    return <li>{veggie}</li>
  });
    
    
  const fruitsList = fruits.map( (fruit) => (
    <li>
      {fruit.name}: {fruit.color}
    </li>
  ));

  return (
    <div className="App">
      <h1>Hello world</h1>

      <ul>
      {veggiesList}
      </ul>

      <ul>
        {fruitsList}
      </ul>

      <List src={veggies} />
    </div>
  );
}

export default App;
