import { XCircleIcon } from '@heroicons/react/24/solid'

const OrderCard = props => {

    const { id,title, imgageUrl, price,handleDelete } = props

    return(

        <div
            className='flex justify-between items-center mb-3'
        >
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img
                        className='w-full h-full rounded-lg object-cover' 
                        src={imgageUrl}
                        alt={title} 
                    />
                </figure>
                <p className='text-sm font-light'>
                    {title} 
                </p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>
                    {price}
                </p>
                <XCircleIcon
                    onClick={()=> handleDelete(id)}
                    className='h-6 w-6 text-black cursor-pointer'
                ></XCircleIcon>
            </div>
        </div>

    )

}

export default OrderCard