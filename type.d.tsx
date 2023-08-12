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
type OrderSlice = {
  order: {
    order: Dishes[]
  },
  totalPrice:number
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