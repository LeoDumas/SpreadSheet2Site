import React from 'react'

type Props = {
    name: string,
    link: string,
    price: string | number,
    image: string,
}

const ItemCard:React.FC<Props> = ({name, link, price, image}) => {
    return (
        <article className=' p-6 border-2 border-black/20 shadow-md'>
            <h1>{name}</h1>
            <img className='w-32' src={image} alt={name} />
            <h3>{price}</h3>
            <a href={link}>
                <button className=' bg-black text-white  px-4 py-1 rounded-md'>Buy</button>
            </a>
        </article>
    )
}

export default ItemCard