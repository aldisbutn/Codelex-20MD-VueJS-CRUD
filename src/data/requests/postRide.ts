import axios from 'axios'
import type { Ride } from '../Ride'

const postRide = async (ride: Ride) => {
  try {
    await axios.post('http://localhost:3000/bikingData', ride).then((res) => {
      console.log(res)
    })
  } catch (error) {
    console.log('Error - ', error)
  }
}

export default postRide
