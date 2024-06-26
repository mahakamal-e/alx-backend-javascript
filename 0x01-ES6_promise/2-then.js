function handleResponseFromAPI(promise) {
  return promise
    .then((response) => {
      console.log('Response:', response);
      return {
        status: 200,
        body: 'success',
      };
    })
    .catch((error) => {
      console.error('Error:', error);
      return new Error('Failed to fetch data');
    })
    .finally(() => {
      console.log('Got a response from the API');
    });
}

export default handleResponseFromAPI;
