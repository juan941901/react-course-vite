import { useContext } from 'react'
import { XCircleIcon } from '@heroicons/react/24/solid'
import { ShopingCarContext } from '../Context'
import OrderCard from '../OrderCard'
import './styles.css'

const CheckoutSideMenu = () => {

    const context = useContext(ShopingCarContext)

    const handleDelete = (id) => {

        const filteredProducts = context.carProducts.filter(product => product.id != id)
        context.setCarProducts(filteredProducts)

    }

    return (

        <aside className={`${context.isCheckoutSideMenu ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>
                    My Order
                </h2>
                <div>
                    <XCircleIcon 
                        className='h-6 w-6 text-black cursor-pointer'
                        onClick={()=>context.closeCheckoutSideMenu()} 
                    ></XCircleIcon>
                </div>
            </div>
            <div className='px-6 overflow-y-scroll'>
                {
                    context.carProducts.map(product =>(

                        <OrderCard 
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imgageUrl={product.image}
                            price={product.price}
                            handleDelete={handleDelete}
                        />
                    ))
                }
            </div>
        </aside>

    )

}

export default CheckoutSideMenu