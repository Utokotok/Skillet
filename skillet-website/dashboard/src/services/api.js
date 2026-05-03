/**
 * API Service
 * Communicates with the Skillet backend API.
 */

const API_BASE = 'http://localhost:3001/api';

async function request(endpoint) {
  const res = await fetch(`${API_BASE}${endpoint}`);
  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }
  const json = await res.json();
  if (!json.success) {
    throw new Error(json.error || 'Unknown API error');
  }
  return json.data;
}

export async function fetchSkills() {
  return request('/skills');
}

export async function fetchSkillsByCategory(category) {
  return request(`/skills/${category}`);
}

export async function fetchSkillContent(path) {
  return request(`/skill/${path}`);
}

export async function fetchRoles() {
  return request('/roles');
}

export async function fetchStats() {
  return request('/stats');
}
