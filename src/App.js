import './App.css';
// import index from "./js/index";
import {addArticle, addIcecream} from "./js/actions/index"
import { useState } from 'react';

function App(props) {
  props.dispatch( addArticle({ title: 'React Redux Tutorial for Beginners', id: 1 }) );
  props.dispatch(addIcecream())
  props.dispatch(addIcecream())
  props.dispatch(addIcecream())
  const [Data, setData] = useState(props.getState())
  console.log(Data)

  return (
    <>
      <h1>{Data.initial.articles.title}</h1>
      <span><strong>ID: </strong>{Data.initial.articles.id}</span>
      <span>
        <h3>Remaining Ice-Cream:</h3>
        <p>{Data.Icecream.numOfIceCreams}</p>
      </span>
    </>
  );
}

export default App;
