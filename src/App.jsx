import Header from "./components/Header";
import VideoPlayer  from "./components/VideoPlayer";
import Comments from './components/Comments'; 

import './App.css'



const App=()=>(
  <>
  <div className="main-container">
    <Header/>
    <VideoPlayer/>
    <Comments/>
  </div>
  </>
)
export default App