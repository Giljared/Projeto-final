import './Styles/global.css'
import Routes from './Routes/Routes'
// import { getUnsubscribedTrailer } from './Services/youtubeVideosServices';

function App() {
  return (
    <>
  <Routes />
    </>
  );
}

export default App;





















// class App extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       unsubscribedTrailer: ''
//     };
//   }

//   componentDidMount = async () => {
//     const response = await getUnsubscribedTrailer();
//     this.setState({
//       unsubscribedTrailer: response.data.items[0].brandingSettings.channel.unsubscribedTrailer
//     });
//   };

//   render() {
//     const { unsubscribedTrailer } = this.state;
//     return (
//       <div>
//         <iframe
//           title="VevoTrailer"
//           width="560"
//           height="315"
//           src={`https://www.youtube.com/embed/${unsubscribedTrailer}`}
//           frameBorder="0"
//           allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//         />
//       </div>
//     );
//   }
// }












// import React from 'react'

// import Router from './Routes/Routes.js'


// function App() {
//   return (
//     <div className="App">
//       <Router/>
      
//     </div>
//   );
// }

// export default App;
