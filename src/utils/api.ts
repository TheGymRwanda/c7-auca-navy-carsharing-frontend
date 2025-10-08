const API_BASE = 'https://carsharing-backend-production.up.railway.app'
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE3LCJpYXQiOjE3NTk5MzMzODIsImV4cCI6MTc2MDAxOTc4Mn0.Jsx7lY1NsaApbCUZVEbeGfXUw188IQia1J78ncz3tJs'

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
