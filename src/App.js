import Header from "./Header";
import Sidebar from "./Sidebar";
import RecommendedVideo from "./RecommendedVideo";
import './App.css';


function App() {
  return (
    <div className="app">
      <Header/>
      {/* Header */}

      <div className="app__page">

      <Sidebar />
      
      {/* Sidebar */}
      <RecommendedVideo />
      {/* RecommendedVideo */}
      </div>
    </div>
  );
}

export default App;
