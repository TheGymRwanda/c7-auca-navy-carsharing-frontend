const API_BASE = 'https://carsharing-backend-production.up.railway.app'
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE4LCJpYXQiOjE3NjAwMjE1OTQsImV4cCI6MTc2MDEwNzk5NH0.s3eONQ2bNwN9IVUr_zfKO1zImu9eeaKPbqNMb7gD7CQ'

export async function fetchWithAuth(endpoint: string, options: RequestInit = {}) {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
    ...options.headers,
  }

  const res = await fetch(`${API_BASE}${endpoint}`, { ...options, headers })

  if (!res.ok) throw new Error(`Fetch failed: ${res.status}`)
  return res.json()
}
