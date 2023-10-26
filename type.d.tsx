type Dishes = {
  
               "id":number,
               "name":string,
               "image":string,
               "description":string,
               "price":number,
               "review":number,
               "stars":number,
               "category":string,
               "meal":string
          
}

type EventForPagination = {
  event: Event | undefined
}

interface OrderProp {
  order:Dishes[]
} 

type loginProp={
  email: String,
  password:String
}
type food = {
    name: string,
       description:string,
         image: string,
     rating: number,
     review:number
}
type foodquery = {
  page: number,
  search: string,
  limit:number
}  
type OrderSlice = {
  order: {
    order:Dishes[]
  }

}
interface RootState {
  order: OrderSlice;
}

interface Values {
  fullName: string;
  message: string;
  email: string;
  subject:string
}

type InputProps = {
     id: string,
     name: string,
     placeholder: string,
     type: string,
     htmlFor:string
}

type CardPropd = {
  currentItems?: Dishes[],
  order?: Dishes[],
  filterHandler? : (category: string) => Dishes[]
}

type starCount = {
  count:number
}

interface PageClickEvent {
  selected: number;
}

type SidbarPropd = {
  currentItems: Dishes[],
  filterHandler: (category: string) => void
  // searchHandler:(name: string) => void
}

type SearchProps = {
  searchHandler:(name: string) => void
}
type userProp = {
  _id: string,
  firstName: string,
  lastName: String,
  email: String,
  password: string,
  createdAt: Date,
  updatedAt:Date
}
type token = string
type loginAuthProp = {
  "user":userProp,
    "token": token
}