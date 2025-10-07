const API_BASE = 'https://carsharing-backend-production.up.railway.app'
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE3LCJpYXQiOjE3NTk4NDMwOTQsImV4cCI6MTc1OTkyOTQ5NH0.7owlG8MPn1XM8Y6sRxO86noi73nUdY6XDegh8ogrblk'

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
