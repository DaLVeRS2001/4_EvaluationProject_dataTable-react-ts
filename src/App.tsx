import React, {useEffect} from 'react';
import './styles/App.css';
import Routes from "./Routes";
import {connect} from "react-redux";
import {setCurrentWidth} from "./redux/thunks/appActions";


export interface IApp{
    setCurrentWidth: (width: number)=> void
}

const App: React.FC<IApp> = ({setCurrentWidth}) =>{

    useEffect(()=> {
        setCurrentWidth(window.innerWidth)
       window.addEventListener('resize', ()=> setCurrentWidth(window.innerWidth))
        //eslint-disable-next-line
    },[])

  return (
    <div className="App">
      <Routes/>
    </div>
  );
}


export default connect(null, {setCurrentWidth})(App);
