// src/api/apiService.ts
import axios from 'axios';
import type { AuthResponse, RegisterData, LoginData } from '../types';
// 1. Apunta a tu backend
const API_URL = 'https://anmi-backend.onrender.com/api';

const api = axios.create({
  baseURL: API_URL,
});

// 2. EL INTERCEPTOR: La "Buena Práctica"
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('anmi_token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// 3. Funciones de autenticación
export const registerUser = (data: RegisterData) => api.post('/users/register', data);
export const loginUser = (data: LoginData) => api.post<AuthResponse>('/users/login', data);
// 4. Funciones del Chat (¡requieren token!)
export const createChat = () => api.post('/chats');
export const getUserChats = () => api.get('/chats');
export const getMessagesForChat = (chatId: string) => api.get(`/chats/${chatId}/messages`);
export const sendMessage = (chatId: string, content: string) => api.post(`/chats/${chatId}/messages`, { content });

export default api;