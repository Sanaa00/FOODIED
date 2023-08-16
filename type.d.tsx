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
  
  // totalPrice:number

type OrderSlice = {
  order: {
    order:Dishes[]
  }

}
interface RootState {
  order: OrderSlice;
  // Other slices of state
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
  order?:Dishes[]
}
type starCount = {
  count:number
}