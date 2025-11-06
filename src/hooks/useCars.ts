import { FullCarInfo } from '../util/api'
import { apiUrl } from '../util/apiUrl'
import { getAuthToken } from '../util/auth'
import useAxios from 'axios-hooks'

export default function useCars() {
  return useAxios<FullCarInfo[]>({
    headers: { Authorization: `Bearer ${getAuthToken()}` },
    url: `${apiUrl}/cars`,
  })
}
