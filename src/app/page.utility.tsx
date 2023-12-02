import { PiBowlFood } from 'react-icons/pi'
import { LuFolderHeart } from 'react-icons/lu'
import { TbTruckDelivery } from 'react-icons/tb'
import chef1 from '../../public/images/chef1.png'
import chef2 from '../../public/images/chef2.png'
import chef3 from '../../public/images/chef3.png'

export const services = [
  {
    id: 1,
    name: 'Serve Healthy Food',
    descriptions:
      'We serve all healthy food here. you can choose any food you like',
    icon: <PiBowlFood className='w-16 h-16 text-orange' />,
  },
  {
    id: 2,
    name: 'Best Quality ',
    descriptions:
      'Our food quality is excellent. you will get exactly what you want here',
    icon: <LuFolderHeart className='w-16 h-16 text-orange' />,
  },
  {
    id: 3,
    name: 'Fast Delivery',
    descriptions:
      'you can say the main goal of our delivery man is to deliver orders quickly . you will receive it shortly after ordering',
    icon: <TbTruckDelivery className='w-16 h-16 text-orange' />,
  },
]
export const chefs = [
  {
    id: 1,
    image: chef1,
  },
  {
    id: 2,
    image: chef2,
  },
  {
    id: 3,
    image: chef3,
  },
]
