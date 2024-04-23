import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShopingCarProvider } from '../../Components/Context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import NavBar from '../../Components/Navbar'
import CheckoutSideMenu from '../../Components/CheckoutSideMenu'
import './App.css'

const AppRoutes = () => {

  let routes = useRoutes(
    [
      { path: '/', element: <Home /> },
      { path: '/my-account', element: <MyAccount /> },
      { path: '/my-order', element: <MyOrder /> },
      { path: '/my-orders/last', element: <MyOrder /> },
      { path: '/my-orders/:id', element: <MyOrder /> },
      { path: '/my-orders', element: <MyOrders /> },
      { path: '/*', element: <NotFound /> },
      { path: '/sign-in', element: <SignIn /> }
    ]
  )

  return routes

}


const App = () => {

  return (
    <>
    <ShopingCarProvider>
      <BrowserRouter>
        <AppRoutes />
        <NavBar />
        <CheckoutSideMenu />
      </BrowserRouter>
    </ShopingCarProvider>
    </>
  )
}

export default App
