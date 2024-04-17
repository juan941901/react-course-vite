import { createContext,useState } from 'react'

export const ShopingCarContext = createContext()

export const ShopingCarProvider = ({children}) => {

    const [count, setCount] = useState(0)
    

    return(
        <ShopingCarContext.Provider value={{
            count,
            setCount
        }}>
            {children}
        </ShopingCarContext.Provider>
    )

}
