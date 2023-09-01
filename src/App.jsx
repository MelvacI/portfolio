import { useEffect, useState } from 'react'
import Loader from './Loader';
import MainContent from './MainContent';

function App() {
  const [count, setCount] = useState(0)

  const [loading, setLoading] = useState(true);

  const [glitch, setGlitch] = useState(false);
  const [welcome, setWelcome] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setGlitch(true);

      setTimeout(() => {
        setGlitch(false);
        setWelcome(true);
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => {
            setLoading(false);
          }, 1000);
        }, 2000);
      }
        , 1000);
    }, 2000);
  }, []);

  console.log(loading)

  return (
    <div id="app">
      {
        loading
          ? (
            <Loader glitch={glitch} welcome={welcome} fadeOut={fadeOut} />
          )
          : (
            <MainContent />
          )
      }


    </div>
  )
}

export default App
