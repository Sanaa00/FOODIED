// import { ChangeEvent } from 'react'

type Dishes = {
  id: number
  name: string
  image: string
  description: string
  price: number
  review: number
  stars: number
  category: string
  meal: string
}

type EventForPagination = {
  event: Event | undefined
}

interface OrderProp {
  order: Dishes[]
}

type loginProp = {
  email: String
  password: String
}
interface FoodItem {
  categoryId: {
    _id: string
    name: string
  }
  name: string
  description: string
  image: string
  rating?: number
  review?: number
  stars: number
  price: number
  _id: string
}

interface Food {
  allFood: {
    data: {
      result: number
      fetchedFood: FoodItem[]
    }

    status: string
  }
}
interface User {
  user: {
    createdAt: string
    password: string
    updatedAt: string
    username: string
    __v: number
    _id: string
  }
}
type OrderRequestProp = {
  userId: string | undefined
}
interface CartItem {
  // Define the properties of a cart item
  productId: {
    image: string
    name: string
    _id: number
    description?: string
    price?: number
  }
  quantity: number
  _id: string
}
interface UserCart {
  userCart: {
    address: string[] // You may want to replace `any` with the actual type of the address
    foods: CartItem[]
    status: string
    totalprice: number[] // You may want to replace `any` with the actual type of the totalprice
    user: string
    __v: number
    _id: string
  }
}

// type FoodItem = {
//   categoryId: {
//     _id: string
//     name: string
//   }
//   name: string
//   description: string
//   image: string
//   rating?: number
//   review?: number
//   _id: string
// }
// interface Food {
//   data: {
//     result: number
//     fetchedFood: FoodItem[]
//   }
//   status: string
// }
type foodquery = {
  category: string
  page: number
  search: string
  limit: number
}
type OrderSlice = {
  order: {
    order: Dishes[]
  }
}
type SearchArg = {
  search: string
}
interface RootState {
  order: OrderSlice
}
type categoryProp = {
  category: {
    category: string
  }
}
interface Values {
  name: string
  message: string
  email: string
  subject: string
}

type InputProps = {
  id: string
  name: string
  placeholder: string
  type: string
  htmlFor: string
  value: string
  onChange: (e: string | any) => void
}

type CardPropd = {
  currentItems?: Dishes[]
  order?: Dishes[]
  filterHandler?: (category: string) => Dishes[]
}

type starCount = {
  count: number
}

interface PageClickEvent {
  selected: number
}

type SidbarPropd = {
  currentItems: Dishes[]
  filterHandler: (category: string) => void
  // searchHandler:(name: string) => void
}
type RootStateSearch = {
  search: {
    search: string
  }
}
type SearchProps = {
  searchHandler: (name: string) => void
}
// type category = {
//   data: [
//     name: string,
//   _id: string,
//     food: string[]
//   ],

//   status:string

// }
interface CategoryItem {
  _id: string
  name: string
  food: Array<unknown> // Replace 'unknown' with the actual type if you know the structure
  __v: number
}

interface category {
  data: CategoryItem[]
  status: string
}
type userProp = {
  _id: string
  firstName: string
  lastName: String
  email: String
  password: string
  createdAt: Date
  updatedAt: Date
}
type token = string
type loginAuthProp = {
  user: userProp
  token: token
}
