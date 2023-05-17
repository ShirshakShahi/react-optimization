import React, { useState, useCallback } from 'react';
import Button from './components/UI/Button/Button';
import './App.css';
import DemoOutput from './components/DEMO/DemoOutput';

function App() {

  const [isShown, setIsShown] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log("APP IS RUNNING");


  const onClickHandler = useCallback(() => {

    if (allowToggle) {
      setIsShown(prevParagraph => {
        return !prevParagraph;
      });
    }

  }, [allowToggle])


  const allowTogglerHandler = () => {
    setAllowToggle(true);
  }

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={isShown} />
      <Button type="submit" onClick={allowTogglerHandler}>Allow Toggling</Button>
      <Button type="submit" onClick={onClickHandler}>Click Me</Button>
    </div>
  );
}

export default App;
