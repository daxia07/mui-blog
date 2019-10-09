import {useState, useEffect} from 'react'

const getWindowDimensions = () => {
  const windowGlobal = typeof window !== 'undefined' && window;
  const {innerWidth: width, innerHeight: height} = windowGlobal;
  return {
    width, height
  }
};

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  useEffect(() => {
    const handleResize = () => setWindowDimensions(getWindowDimensions());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return windowDimensions;
}

export default useWindowDimensions