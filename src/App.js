import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Auth from './components/Auth.js'
import Profile from './components/Profile.js'
import kakaoImage from './assets/kakaoImage.png'

function App() {
  const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY
  const REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URI
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`
  console.log(REST_API_KEY)
  console.log(REDIRECT_URI)

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <div className="kakaoImage">
              <a href={KAKAO_AUTH_URL}>
                <img src={kakaoImage}></img>
              </a>
            </div>
          </Route>
          <Route path="/oauth/kakao/callback">
            <Auth />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
