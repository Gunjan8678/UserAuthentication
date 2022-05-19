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
    // console.log('okk', getNewsAPI(reset));
    const response = await fetch(getNewsAPI(reset));
    const data = await response.json(); // <-- error solved: here data will not be written in flower braces as they are not predefined in the api
    // console.log('data', data);
    setNews(data);
    setIndex(1);
  };
  const fetchNewsfromSources = async () => {
    console.log('source API ', getSourceAPI(source));
    try {
      const response = await fetch(getSourceAPI(source));
      const data = await response.json();
      // console.log('source api  here ', data);
      // const {data} = await response.json(); <-- error solved: here data will not be written in flower braces as they are not predefined in the api
      setNews(data);
      setIndex(1);
      console.log('source news api      here ', news);
    } catch (e) {
      console.log('inside fetchNews from Sources');
      console.log('error', e);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [category]);
  useEffect(() => {
    fetchNewsfromSources();
  }, [source]);

  return (
    <NewsContext.Provider
      value={{
        news,
        index,
        setIndex,
        setSource,
        setCategory,
        darkTheme,
        setDarkTheme,
        fetchNews,
      }}>
      {children}
    </NewsContext.Provider>
  );
};

export default Context;
