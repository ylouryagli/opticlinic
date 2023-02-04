import './App.css';
import Navigation from './pages/navigation/navigation.page.jsx';
import CollectionFilter from './sections/collection-filter/collection-filter.section';
import CardItems from './sections/card-items/card-items.section.jsx';





function App() {
  return (
    <div>
    
   <Navigation/>
   <CollectionFilter />
   <CardItems />
   

    
    </div>
    
      
  );
}

export default App;
