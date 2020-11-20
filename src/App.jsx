import './App.css';
import Routes from './Routes'
import Header from './components/layout/header/Header'
import SideBar from './components/layout/sideBar/SideBar'

var isLoggedIn = localStorage.getItem("isLoggedIn") || false

function App() {
  if (isLoggedIn) {
    return (
      <div className="App">
        <Header />
        <SideBar />


        <Routes />
      </div>
    )
  } else {
    return (
      <div className="App">
        <Routes />
      </div>)
  }
}

export default App;
