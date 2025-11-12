export interface ChatSession {
  id: string;
  userId: string;
  title: string;
  createdAt: string;
}

export interface Message {
  id: string;
  chatSessionId: string;
  sender: 'USER' | 'BOT';
  content: string;
  createdAt: string;
}

export interface AuthResponse {
  message: string;
  token: string;
  username: string;
}

export interface RegisterData {
  username: string;
  password?: string;
  babyAgeMonths: number | null;
}

export interface LoginData {
  username: string;
  password?: string;
}