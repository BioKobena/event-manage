export type UserRole = 'user' | 'admin';

export interface AuthSession {
  role: UserRole;
  id: number;
  email: string;
  displayName: string;
  source: 'client' | 'gestionnaire';
}
