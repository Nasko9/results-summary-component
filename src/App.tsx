import data from './data/data.json';

function App() {
  // ? W:476px h:333px  mobile: w:345 h: full
  return <div>{data[0].category}</div>;
}

export default App;
