import Header from './components/layout/header';
import Adder from './components/functionals/adder/adder';
function App() {
  return (
    <div>
        <Header/>     
        <div id="content">
          <Adder/>
        </div> 
    </div>
  );
}

export default App;
