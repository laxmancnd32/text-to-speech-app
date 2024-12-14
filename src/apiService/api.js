import { API_KEY, BASE_URL } from "../constants";

export const getVoices = () =>
    fetch(`${BASE_URL}/v1/voices`, {
        method: 'GET',
        headers: {
            'xi-api-key': API_KEY, // Replace with your actual API key
        },
    });
  
  export default {
    getVoices
  };