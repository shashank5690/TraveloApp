// import axios from 'axios';

// const API_URL = 'https://freetestapi.com/api/v1/destinations';

// export const fetchDestinationsFromApi = () => {
//     return axios.get(API_URL).then(response => 
//       response.data ? response.data : 'No destinations found'
//     ).catch((error: string) => error
// )
//   };



const API_URL = 'https://freetestapi.com/api/v1/destinations';

export const fetchDestinationsFromApi = () => API_URL;


// we need to exporthe the url as it is not data that we are fetching but the url