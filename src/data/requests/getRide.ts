import axios from 'axios'
import type { Ride } from '../Ride'

const getRide = async (id: string): Promise<Ride> => {
  try {
    const response = await axios.get(`http://localhost:3000/bikingData/${id}`)
    return response.data
  } catch (error) {
    console.log('Error - ', error)
    return {} as Ride
  }
}

export default getRide
