// Функция для загрузки данных из JSON файла
const fetchAdvertsFromJson = async () => {
  try {
    const response = await fetch('adverts.json');
    if (!response.ok) {
      throw new Error('Failed to fetch campers');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching campers:', error);
    return [];
  }
};

// Экспортируем функцию для получения всех продуктов из файла JSON
export const getCampers = async () => {
  return await fetchAdvertsFromJson();
};

// Экспортируем функцию для получения продукта по его ID из файла JSON
export const getCamperById = async camperId => {
  const campers = await fetchAdvertsFromJson();
  return campers.find(camper => camper._id === camperId);
};
