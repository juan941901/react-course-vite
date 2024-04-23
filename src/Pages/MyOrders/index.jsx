import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../Components/Layout'
import { ShopingCarContext } from '../../Components/Context'
import OrdersCard from '../../Components/OrdersCard'

function MyOrders() {

  const context = useContext(ShopingCarContext)


    return (
      <>
        <Layout>
          <div className='flex justify-center items-baseline w-80 relative '> 
            <h1>
              My Orders
            </h1>

          </div>
          {
            context.order.map((order, index) =>(
              <Link key={index} to={`/my-orders/${index}`}>
                <OrdersCard 
                  totalPrice={order.totalPrice}
                  totalProducts={order.totalProducts}                
                />
              </Link>
            ))
          }
        </Layout>
      </>
    )
  }
  
  export default MyOrders
  