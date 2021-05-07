import React from 'react';
import './App.css';
import SMS from './components/SMS';
import URL from './components/URL';
import Email from './components/Email';


const App: React.FC = () => {
 return (
 <div className="Container">
 <div className="Column1">
   <SMS />
   </div>
   <div className="Column2">
     <URL />
   </div>
   <div className="Column3">
     <Email />
   </div>
</div>
 );
}

export default App;
 