export function getAuthToken(): string | null {
  return localStorage.getItem('token')
}
const API_BASE = 'https://carsharing-backend-production.up.railway.app'
const token = getAuthToken()
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
