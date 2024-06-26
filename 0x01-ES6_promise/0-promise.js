function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const success = true; // Change this to simulate success or failure
    setTimeout(() => {
      if (success) {
        resolve('Mock API response');
      } else {
        reject(new Error('Error: API request failed'));
      }
    }, 1000);
  });
}

export default getResponseFromAPI;
