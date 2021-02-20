//https://developer.spotify.com/documentation/web-playback-sdk/quick-start/
export const authEndpoint = 
"https://accounts.spotify.com/authorize";
const redirectUrli = "http://localhost:3000/";
// const redirectUrli = "https://spotify-clone-d2b85.web.app/";

const clientId = "6b1c9aefbacf405f9f078291ca62dfc0";

const scopes = [
    "user-read-currently-playing",
    "user-read-currently-playing",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
]

export const getTokenFromUrl = () => {
    //#accessToken=mysupersecretkey&name=ahmed&age=30
    return window.location.hash
        .substring(1)
        .split('&')
        .reduce((initial,item) => {
            
            let parts = item.split('=');
            initial[parts[0]] = decodeURIComponent(parts[1])
            return initial
        },{})
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUrli}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;