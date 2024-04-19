import { useContext } from 'react'
import { PlusIcon } from '@heroicons/react/24/solid'
import { ShopingCarContext } from '../Context'


const Card = (data) => {

    const context = useContext(ShopingCarContext)

    const showProduct = (productDetail) => {

        context.openProductDetail()
        context.setProductToShow(productDetail)

    }

    const addProductsToCart = (event, productData) => {

        event.stopPropagation()
        context.setCount(context.count + 1)
        context.setCarProducts([...context.carProducts,productData])
        context.openCheckoutSideMenu()
        context.closeProductDetail()

    }

    return (
        <div 
            className='bg-white cursor-pointer w-56 h-60 rounded-lg'
            onClick={()=>showProduct(data.data)}        
        >
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>
                    {data.data.category}
                </span>
                <img className='w-full h-full object-cover rounded-lg' src={data.data.image} alt={data.data.title} />
                <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
                onClick={(event) => addProductsToCart(event,data.data)}
                >
                    <PlusIcon className='h-6 w-6 text-black'></PlusIcon>
                </div>
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>
                    {data.data.title}
                </span>
                <span className='text-lg font-bold' >
                    ${data.data.price}
                </span>
            </p>
        </div>
    )
}

export default Card