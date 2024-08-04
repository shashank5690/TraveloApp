import axios from 'axios';

const API_URL = 'https://freetestapi.com/api/v1/destinations';

export const fetchDestinationsFromApi = () => {
    return axios.get(API_URL).then(response => 
      response.data
)
  };