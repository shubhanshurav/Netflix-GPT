import Body from './componenets/Body';
import appStore from './redux/store/appStore';
import { Provider } from 'react-redux';

function App() {
  return (

    <Provider store={appStore} >
       <Body />;
    </Provider>

  )
}

export default App;
