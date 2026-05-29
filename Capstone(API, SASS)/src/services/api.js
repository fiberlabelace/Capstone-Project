import axios from 'axios';

const API_URL =
  'https://6a195991489e47157519d31b.mockapi.io';

const api = axios.create({
  baseURL: API_URL,
});

export const getProducts = () => api.get('/products');

export const createProduct = (data) =>
  api.post('/products', data);

export const updateProduct = (id, data) =>
  api.put(`/products/${id}`, data);

export const deleteProduct = (id) =>
  api.delete(`/products/${id}`);

export default api;