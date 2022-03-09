var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  
  fetch("api-mainnet.magiceden.dev/v2/collections/monkelabs/stats", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));