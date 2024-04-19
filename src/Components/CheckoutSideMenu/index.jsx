import { useContext } from 'react'
import { XCircleIcon } from '@heroicons/react/24/solid'
import { ShopingCarContext } from '../Context'
import './styles.css'

const CheckoutSideMenu = () => {

    const context = useContext(ShopingCarContext)

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
        </aside>

    )

}

export default CheckoutSideMenu