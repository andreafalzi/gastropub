import React, { useState, useEffect, createContext } from 'react';

export const DataContext = createContext();

const DataProvider = (props) => {
  const [textData, setTextData] = useState([]);
  const [menuesData, setMenuesData] = useState([]);
  const [imagesData, setImagesData] = useState([]);

  const urlTexts = 'https://gastropub.webexam-mcdm.dk/api/texts';
  const urlMenus = 'https://gastropub.webexam-mcdm.dk/api/menus';
  const urlImages = 'https://gastropub.webexam-mcdm.dk/api/images';
  // Function to collect data

  useEffect(() => {
    const options = {
      headers: {
        Accept: 'application/json',
      },
    };
    fetch(urlTexts, options)
      .then((response) => response.json())
      .then((response) => setTextData(response))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    const options = {
      headers: {
        Accept: 'application/json',
      },
    };
    fetch(urlMenus, options)
      .then((response) => response.json())
      .then((response) => setMenuesData(response))
      .catch((err) => console.error(err));
  }, [urlMenus]);

  useEffect(() => {
    const options = {
      headers: {
        Accept: 'application/json',
      },
    };
    fetch(urlImages, options)
      .then((response) => response.json())
      .then((response) => setImagesData(response))
      .catch((err) => console.error(err));
  }, []);

  return <DataContext.Provider value={[textData, menuesData, imagesData]}>{props.children}</DataContext.Provider>;
};

export default DataProvider;
