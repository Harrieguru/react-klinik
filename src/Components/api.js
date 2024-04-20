import axios from 'axios';

// Function to fetch all vital signs data
export const getAllVitals = async () => {
  try {
    const response = await axios.get('http://localhost:4000/vitals');
    return response.data;
  } catch (error) {
    console.error('Error fetching vitals:', error);
    throw error;
  }
};

// Function to add new vital signs data
export const addNewVitals = async (newVitals) => {
  try {
    const response = await axios.post('http://localhost:4000/vitals', newVitals);
    return response.data;
  } catch (error) {
    console.error('Error adding new vitals:', error);
    throw error;
  }
};
