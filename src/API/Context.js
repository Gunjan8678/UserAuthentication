import React, {createContext, useState, useEffect} from 'react';
import {getNewsAPI, getSourceAPI} from './api';
// import axios from 'axios';

export const NewsContext = createContext();

const Context = ({children}) => {
  const [news, setNews] = useState({});
  const [category, setCategory] = useState('general');
  const [source, setSource] = useState();
  const [index, setIndex] = useState(1);
  const [darkTheme, setDarkTheme] = useState(true);

  const fetchNews = async (reset = category) => {
    console.log('okk', getNewsAPI(reset));
    const response = await fetch(getNewsAPI(reset));
    const data = await response.json();
    console.log('data', data);
    setNews(data);
    setIndex(1);
  };
  const fetchNewsfromSources = async () => {
    try {
      const response = await fetch(getSourceAPI(source));
      const {data} = await response.json();
      setNews(data);
      setIndex(1);
    } catch (e) {
      console.log('error', e);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [category]);
  // useEffect(() => {
  //   fetchNewsfromSources();
  // }, [source]);

  return (
    <NewsContext.Provider
      value={{
        news,
        index,
        setIndex,
        setSource,
        setCategory,
        // darkTheme,
        // setDarkTheme,
        fetchNews,
      }}>
      {children}
    </NewsContext.Provider>
  );
};

export default Context;
