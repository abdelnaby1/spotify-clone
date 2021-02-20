import React ,{useState,useEffect}from 'react'

import './App.css';
import Login from './Login'
import { getTokenFromUrl } from './spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';

const spotify = new SpotifyWebApi();

function App() {
  // const [token, setToken] = useState(null);
  const [{user,token},dispatch] = useDataLayerValue()
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if(_token) {      
      dispatch({
        type: 'SET_TOKEN',
        token: _token
      })

      spotify.setAccessToken(_token);
      spotify.getMe()
        .then(user => {
         
          dispatch({
            type: "SET_USER",
            user: user
          })
        })
        // .catch(err => console.log(err));

        spotify.getUserPlaylists()
          .then((playlists) => {
            // console.log(playlists)
            dispatch({
              type: "SET_PLAYLISTS",
              playlists: playlists
            })
          })

          spotify.getPlaylist("37i9dQZF1DWZyonhntyFxW")
            .then(response => {
              dispatch({
                type: "SET_DISCOVER_WEEKLY",
                discover_weekly: response
              })
            })
          // .catch(err => console.log(err))
    }
    
  }, []);
  // console.log(user)
  // console.log(token)

  return (
    <div className="app">
      { token ? <Player spotify={spotify} />: <Login /> }
    </div>
  );
}

export default App;
