export type Languages = 'en' | 'hi' | 'fr'
export interface User {
  id: number
  name: string
  is_verified: boolean
  labels: string[]
}
export interface Post {
  title: string
  image: string
  body: string
  user: User
}

