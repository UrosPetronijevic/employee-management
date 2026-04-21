export interface AuthUser {
  id: string;
  username: string;
  email: string;
  role: "admin" | "user";
  createdAt: string;
}

export interface RegisterPayload {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}
