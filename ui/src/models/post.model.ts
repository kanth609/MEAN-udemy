export interface Post {
  id: string;
  title: string;
  content: string;
}

export interface PostResponse {
  posts: Post[];
  message: string;
}
