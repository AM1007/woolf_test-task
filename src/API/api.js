// import { dataURL } from './dataURL';

// // Функция для загрузки данных с API
// const fetchDataFromApi = async endpoint => {
//   try {
//     const response = await fetch(`${dataURL}${endpoint}`);
//     if (!response.ok) {
//       throw new Error('Failed to fetch data');
//     }
//     return await response.json();
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     return [];
//   }
// };

// // Экспортируем функцию для получения всех данных с API
// export const getData = async () => {
//   return await fetchDataFromApi('rental_api');
// };

// // Экспортируем функцию для получения данных по ID с API
// export const getDataById = async dataId => {
//   const data = await fetchDataFromApi(`data/${dataId}`);
//   return data;
// };

//В этом коде функция fetchDataFromApi выполняет запросы к API по указанному вами URL. Функции getData и getDataById используют fetchDataFromApi для получения данных. Замените 'data' на нужный вам конечный пункт (endpoint).

// ==============================================================

import axios from 'axios';
import { dataURL } from './dataURL';

// Функция для загрузки данных с API
const fetchDataFromApi = async endpoint => {
  try {
    const response = await axios.get(`${dataURL}${endpoint}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

// Экспортируем функцию для получения всех данных с API
export const getData = async () => {
  return await fetchDataFromApi('rental_api');
};

// Экспортируем функцию для получения данных по ID с API
export const getDataById = async dataId => {
  const data = await fetchDataFromApi(`data/${dataId}`);
  return data;
};
