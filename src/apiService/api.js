
export const getVoices = () => {
    return fetch(`${process.env.REACT_APP_BASE_URL}/v1/voices`, {
        method: 'GET',
        headers: {
            'xi-api-key': process.env.REACT_APP_API_KEY, // Replace with your actual API key
        },
    });
  }
  
  export default {
    getVoices
  };