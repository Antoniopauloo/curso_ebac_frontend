
interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface GitHubUser {
  login: string;
  id: number;
  avatar_url: string;
  html_url: string;
  name: string;
  company: string | null;
  blog: string;
  location: string | null;
  email: string | null;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
}

export interface ApiResponse<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export async function fetchData<T>(url: string): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }
    
    const data = await response.json();
    return { data, loading: false, error: null };
  } catch (error) {
    let errorMessage = 'Ocorreu um erro desconhecido';
    
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    
    return { data: null, loading: false, error: errorMessage };
  }
}

export async function fetchUsers(): Promise<ApiResponse<User[]>> {
  return fetchData<User[]>('https://jsonplaceholder.typicode.com/users');
}

export async function fetchPosts(): Promise<ApiResponse<Post[]>> {
  return fetchData<Post[]>('https://jsonplaceholder.typicode.com/posts');
}

export async function fetchUserPosts(userId: number): Promise<ApiResponse<Post[]>> {
  return fetchData<Post[]>(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
}

export async function fetchGitHubUser(username: string): Promise<ApiResponse<GitHubUser>> {
  return fetchData<GitHubUser>(`https://api.github.com/users/${username}`);
}

export type { User, Post, GitHubUser };
