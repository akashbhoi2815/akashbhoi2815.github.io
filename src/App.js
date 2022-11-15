import './App.css';
import Profile from './PortfolioContainer/Home/Profile';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import AboutMe from './PortfolioContainer/AboutMe/AboutMe';
import Resume from './PortfolioContainer/Resume/Resume';
import Contact from './PortfolioContainer/ContactMe/Contact'
import { Project } from './PortfolioContainer/Projects/Project'
import Card from 'react-bootstrap/Card'
import Toggle from './PortfolioContainer/toggle/Toggle';
import { useContext } from 'react';
import { ThemeContext } from './context';
import Stats from './PortfolioContainer/stats/Stats';
import Calender from './PortfolioContainer/stats/Calender';

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <>
      <div className="App container-fluid"
        style={{
          backgroundColor: darkMode ? "#1F1301" : "#f3f2ef",
          color: darkMode && "whitesmoke",
        }}>
        {/* <Toggle /> */}
        <Profile />
        <AboutMe />
        <Resume />
        <Project />
        <Stats/>
        <Contact />
        <Card body className="footer">© 2022 Akash Bhoi
        </Card>
        
      </div>
    </>
  );
}

export default App;
