"use client"
import React, { ReactNode } from 'react'
import { store } from './store'
import { Provider } from 'react-redux';



interface ProviderComponentProps {
  children: ReactNode;
}


function ProviderComponent({children}:ProviderComponentProps) {
  return (
       <Provider store={store}>
            {children}
       </Provider>
    
 
  )
}

export default ProviderComponent
