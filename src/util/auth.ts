export function getAuthToken(): string | null {
  return localStorage.getItem('token')
}
const API_BASE = 'https://carsharing-backend-production.up.railway.app'
const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE3LCJpYXQiOjE3NjAzNjMyMzEsImV4cCI6MTc2MDQ0OTYzMX0.XfnFDcrMTjaCeLbjjyvJbb5YGTTZ7YovDyKwRVr7ogc'

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
