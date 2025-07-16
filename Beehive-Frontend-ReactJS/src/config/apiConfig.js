const API_BASE_URL = "http://127.0.0.1:3001/api";

const API_ENDPOINTS = {
  LOGIN: `${API_BASE_URL}/auth/login`,
  REGISTER: `${API_BASE_URL}/auth/register`,
  BEEHIVES: `${API_BASE_URL}/beehives`,
};

const API_HEADERS = {
  JSON: {
    headers: {
      "Content-Type": "application/json",
    },
  },
};

const getAuthHeader = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    "Content-Type": "application/json",
  },
});

export { API_BASE_URL, API_ENDPOINTS, API_HEADERS, getAuthHeader };
