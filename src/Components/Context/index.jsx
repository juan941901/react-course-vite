import { createContext,useState,useEffect } from 'react'

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
    
    //Shopping Cart - Order
    const [order, setOrder] = useState([])

    // Get products
    const [items, setItems] = useState(null)

    // Get products
    const [searchByTitle, setSearchByTitle] = useState('')
    console.log('searchByTitle: ',searchByTitle)

    useEffect(() => {
      //fetch('https://api.escuelajs.co/api/v1/products')
      fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setItems(data))
    },[]) 

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
            closeCheckoutSideMenu,
            order,
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle
        }}>
            {children}
        </ShopingCarContext.Provider>
    )

}
