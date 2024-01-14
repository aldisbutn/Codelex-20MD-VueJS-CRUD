import axios from 'axios'
import type { Ride } from '../Ride'

const editRide = async (id: string, data: Ride) => {
  try {
    await axios.put(`http://localhost:3000/bikingData/${id}`, data)
  } catch (error) {
    console.log('Error - ', error)
  }
}

export default editRide
