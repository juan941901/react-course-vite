import { createContext,useState } from 'react'

export const ShopingCarContext = createContext()

export const ShopingCarProvider = ({children}) => {

    //Shopping Cart - Increment quantity
    const [count, setCount] = useState(0)

    //Prodcut Detail - Open/close
    const [isOpenProductDetail, setIsOpenProductDetail] = useState(false)
    const openProductDetail = () => setIsOpenProductDetail(true)
    const closeProductDetail = () => setIsOpenProductDetail(false)
    
    //Checkout Side Menu Detail - Open/close
    const [isCheckoutSideMenu, setIsCheckoutSideMenu] = useState(false)
    const openCheckoutSideMenu = () => setIsCheckoutSideMenu(true)
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenu(false)

    //Prodcut Detail - Show Product
    const [productToShow, setProductToShow] = useState({})
    
    //Shopping Cart - Add produts to cart
    const [carProducts, setCarProducts] = useState([])

    return(
        <ShopingCarContext.Provider value={{
            count,
            setCount,
            isOpenProductDetail,
            openProductDetail,
            closeProductDetail,
            productToShow,
            setProductToShow,
            carProducts,
            setCarProducts,
            isCheckoutSideMenu,
            setIsCheckoutSideMenu,
            openCheckoutSideMenu,
            closeCheckoutSideMenu
        }}>
            {children}
        </ShopingCarContext.Provider>
    )

}
