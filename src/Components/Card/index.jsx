const Card = () => {
    return (
        <div className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-sm'>
                    Electronics
                </span>
                <img src='https://images.pexels.com/photos/4887161/pexels-photo-4887161.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='Headphone' />
                <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full'>
                    +
                </div>
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>
                    Headphone
                </span>
                <span className='text-lg font-bold' >
                    $300
                </span>
            </p>
        </div>
    )
}

export default Card