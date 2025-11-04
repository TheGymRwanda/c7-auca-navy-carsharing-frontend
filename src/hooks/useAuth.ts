import useAxios from 'axios-hooks'

import { UserDto } from '@/util/api'
import { apiUrl } from '@/util/apiUrl'
import { getAuthToken } from '@/util/auth'

export default function useAuth() {
  return useAxios<UserDto>({
    headers: { Authorization: `Bearer ${getAuthToken()}` },
    url: `${apiUrl}/auth`,
  })
}
