import './App.css';
import Navigation from './pages/navigation/navigation.page.jsx';
import Collection from './pages/collection/collection.page';
import Contact from './pages/contact/contact.page.jsx';
import {Routes, Route} from 'react-router-dom';





function App() {
  return (
    <Routes>
        <Route   path='/'  element={<Navigation />}>
          {/* <Route index  element={<Home />} /> */}
          {/* {/<Route path='/shop'  element={<Shop />} /> */}
          <Route path='/contact'  element={<Contact />} /> 
          <Route path='/collection'  element={<Collection />} />
      </Route>
        
    </Routes>

    
      
  );
}

export default App;
