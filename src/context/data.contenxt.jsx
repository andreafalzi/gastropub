import React, { useState, useEffect, createContext } from 'react';

export const DataContext = createContext();

const DataProvider = (props) => {
  const [textData, setTextData] = useState([]);

  const url = 'https://gastropub.webexam-mcdm.dk/api/texts';
  // Function to collect data

  useEffect(() => {
    const options = {
      headers: {
        Accept: 'application/json',
      },
    };
    fetch(url, options)
      .then((response) => response.json())
      .then((response) => setTextData(response))
      .catch((err) => console.error(err));
  }, []);

  return <DataContext.Provider value={[textData]}>{props.children}</DataContext.Provider>;
};

export default DataProvider;
