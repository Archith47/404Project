import './App.css';
import Page from "./404.js"
import Page1 from "./heading1"
import Moon from "./moon"
import Ellipse from "./ellipse1"
import Circle from './circle';
import Line from './line'
import Ellipse2 from "./ellipse2"
import Planets from './planets'


function App() {
  return (
    <div className="App">
      
      <Ellipse/>
      <Ellipse2/>
      <Circle/>
      <Page/>
      <Page1/>
      <Moon/>
     
      <Planets/>
        <Line/> 
       
        

    </div>
  );
}

export default App;
