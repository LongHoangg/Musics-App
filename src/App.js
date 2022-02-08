import logo from './logo.svg';
import './App.css';

const Default = (props)=>{
  return(
    <h1>{props.text}</h1>
  )
}

const App = (props)=>{
    
    return(
      <Default text = 'blue'></Default>
    )
}

export default App;
