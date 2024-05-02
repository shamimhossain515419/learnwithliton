export const generateRandomFileName = originalFileName => {
  const currentDate = new Date();
  const year = currentDate.getFullYear().toString().slice(-2);
  const month = String(currentDate.getMonth() + 1).padStart(2, '0');
  const day = String(currentDate.getDate()).padStart(2, '0');
  const randomNumbers = getRandomNumber(100000, 999999);

  // Extract the original file extension
  const originalFileExtension = originalFileName.split('.').pop();

  return `${year}${month}${day}_${randomNumbers}.${originalFileExtension}`;
};

const getRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};
