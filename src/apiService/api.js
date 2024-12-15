
export const getVoices = () => {
  return fetch(`${process.env.REACT_APP_BASE_URL}/v1/voices`, {
      method: 'GET',
      headers: {
          'xi-api-key': process.env.REACT_APP_API_KEY,
      },
  });
}

export const getSpeechFromText = (voiceId = '', payload) => {
  return fetch(`${process.env.REACT_APP_BASE_URL}/v1/text-to-speech/${voiceId}`, {
      method: 'POST',
      headers: {
          'xi-api-key': process.env.REACT_APP_API_KEY,
          'Content-Type': "application/json"
      },
      body: JSON.stringify(payload)
  });
}
  
export default {
  getVoices,
  getSpeechFromText
};