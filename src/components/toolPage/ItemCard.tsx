import React from 'react'

type Props = {
    name: string,
    link: string,
    price: string | number,
    image: string,
}

const ItemCard:React.FC<Props> = ({name, link, price, image}) => {
    return (
        <article className="flex flex-col bg-white shadow-md rounded-lg overflow-hidden self-start min-w-96 max-w-96 min-h-[32rem] max-h-[32rem] divide-y px-2">
            <div className="pb-6">
                <img src={image} alt={name} className="w-full h-80 object-scale-down" />
            </div>
            <div className="flex flex-col items-center justify-between flex-grow">
                <div className="text-start">
                    <h3 className="text-lg font-medium text-gray-800">{name}</h3>
                </div>
                <div className="flex flex-col items-start  w-full mt-auto">
                    <span className="text-lg font-bold text-gray-800">{price}</span>
                    <a className=' w-full' href={link}>
                        <button className="bg-blue-500 hover:bg-blue-600 w-full px-6 py-2 text-white font-medium rounded-md mt-4 mb-2">
                            Buy now
                        </button>
                    </a>
                </div>
            </div>
        </article>
    )
}

export default ItemCard