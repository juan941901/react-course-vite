import { createContext,useState } from 'react'

export const ShopingCarContext = createContext()

export const ShopingCarProvider = ({children}) => {

    //Prodcut Detail - Increment quantity
    const [count, setCount] = useState(0)

    //Prodcut Detail - Open/close
    const [isOpenProductDetail, setIsOpenProductDetail] = useState(false)
    const openProductDetail = () => setIsOpenProductDetail(true)
    const closeProductDetail = () => setIsOpenProductDetail(false)
    
    //Prodcut Detail - Show Product
    const [productToShow, setProductToShow] = useState({})

    return(
        <ShopingCarContext.Provider value={{
            count,
            setCount,
            isOpenProductDetail,
            openProductDetail,
            closeProductDetail,
            productToShow,
            setProductToShow
        }}>
            {children}
        </ShopingCarContext.Provider>
    )

}
