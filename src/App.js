import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import SettingScreen from './pages/SettingScreen.js';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom'
import { BrowserRouter, HashRouter  } from 'react-router-dom';
import FinalScore from './pages/FinalScore.js';
import Questions from './pages/Questions.js';
import Direction from './pages/Direction.js';
import styled from "./scss/App.module.scss";
import classNames from "classnames/bind";


function App() {
  const cx = classNames.bind(styled);

  return (
    <div className={cx("App")}>
      <div className={cx("container")}>
        <div className={cx("center")}>

          <HashRouter >
            <div className={cx("App-title")}>
              <h2><NavLink to='/'>Dictionary</NavLink> </h2>
              <h2><NavLink to='quiz'>Quiz</NavLink> </h2>
            </div>
            <Routes>
              <Route path='/' element={<Direction />} />
              <Route path='/Dictionary' element={<Direction />} />
              <Route path='quiz' element={<SettingScreen />} />
              <Route path='quiz/questions' element={<Questions />} />
              <Route path='quiz/score' element={<FinalScore />} />

            </Routes>
          </HashRouter >
        </div>
      </div>

    </div>
  );
}

export default App;
