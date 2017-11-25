/*import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();*/

import React from 'react' ;
import ReactDOM from 'react-dom';

let name ='allah';
let palce ='mochdeu';


function Cars(pro){
  return <div> <h1>Car is {pro.name}</h1> </div>
}



ReactDOM.render (
   <Cars name="BMW"/>,
  document.getElementById('root')
);
