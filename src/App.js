import logo from './logo.svg';
import SignIn from './Pages/SignIn/SignIn';
import SignUp from './Pages/SignUp/SignUp';
import './App.css';
import TakeNoteOne from './components/takeNoteOne/TakeNoteOne';
import Header from './components/header/Header';
import TakeNoteTwo from './components/takeNoteTwo/TakeNoteTwo';
import TakeNoteThree from './components/takeNoteThree/TakeNoteThree';
import Dasboard from './Pages/Dashboard/Dasboard';
import { Provider } from 'react-redux';
import store from './components/redux/store';
import RouterConfig from './router/router';
import ParentComponent from './review/parent';
//import Parent from './review/parent';

function App() {
  return (
    <div className="App">

      {/* <ParentComponent /> */}

      <Provider store={store}>
        <RouterConfig />
        
      </Provider> 
      {/* <Dasboard />
        <SignIn />
        <SignUp /> */}
      {/* {/* <Header /> */}
      {/* <TakeNoteOne />
      <TakeNoteTwo />
      <TakeNoteThree />  */}
      
      {/* <SignUp /> */}
      
    </div>
  );
}

export default App;
