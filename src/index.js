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

function cartoon(checkDefalut="defalue"){

  return <div className='end'> <h1>Let check {name} and {palce} and {checkDefalut}</h1> </div>
}

setInterval(function(){
  ReactDOM.render(
    <h1>  {new Date().toLocaleTimeString()} </h1>,
     document.getElementById('root')
  );
},1000);
