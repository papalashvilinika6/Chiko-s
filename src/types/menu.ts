export interface MenuItem {
  id: string
  name: string
  price: number
  description?: string
  ingredients: string[]
  image: string
  category: string
  featured?: boolean
}

export interface MenuCategory {
  id: string
  name: string
}