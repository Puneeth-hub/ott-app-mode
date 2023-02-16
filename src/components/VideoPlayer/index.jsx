import ReactPlayer from "react-player";


import './index.css'

const videoUrl = 'https://youtu.be/LVinb-WEH24' 


const VideoPlayer=()=>(
    <div className="video-container">
    <ReactPlayer
      url={videoUrl}
      controls
      width="100%"
      className="video-player"
      
    />
    <h1 className="heading-title">iTalent Digital</h1>
    <p className="view-off">9,190,205 views - Feb 16, 2023</p>
    <hr className="horizental"/>
    </div>
)
export default VideoPlayer