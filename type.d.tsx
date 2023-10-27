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
type foodItem = {
   categoryId: {
    _id: string;
    name: string;
  };
    name: string,
    description:string,
    image: string,
    rating: number,
    review:number
}
type Food = {
   data: {
        result: number,
        fetchedFood:foodItem[]},
   status: string ;
}
type foodquery = {
  category:string,
  page: number,
  search: string,
  limit:number
}  
type OrderSlice = {
  order: {
    order:Dishes[]
  }

}
type SearchArg = {
  searcg:string
}
interface RootState {
  order: OrderSlice;
}
type categoryProp = {
  category: {
    category: string
  }
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
type RootStateSearch={
  search: {
     search:string
   }
 }
type SearchProps = {
  searchHandler:(name: string) => void
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
  _id: string;
  name: string;
  food: Array<unknown>; // Replace 'unknown' with the actual type if you know the structure
  __v: number;
}

interface category {
  data: CategoryItem[];
  status: string;
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