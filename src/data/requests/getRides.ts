import axios from 'axios'
import type { Ride } from '../Ride'

const getRides = async (): Promise<Ride[]> => {
  try {
    const response = await axios.get('http://localhost:3000/bikingData')
    return response.data
  } catch (error) {
    console.log('Error - ', error)
    return []
  }
}

export default getRides
