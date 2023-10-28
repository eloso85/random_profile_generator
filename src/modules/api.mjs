async function fetchApiData() {
    try {
      const response = await fetch('/api/data');
      if (!response.ok) {
        throw new Error('API request failed');
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
  
  export default fetchApiData;