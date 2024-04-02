import React, { useState, useEffect } from 'react';
import ItemCard from './ItemCard';

const Hero: React.FC = () => {
    const [items, setItems] = useState<any[]>([]); // Define state to store items

    useEffect(() => {
        // Retrieve items data from localStorage
        const storedItems = localStorage.getItem('items');
        if (storedItems) {
            setItems(JSON.parse(storedItems)); // Parse JSON string into array and set it as state
        }
    }, []);

    return (
        <div className=' flex flex-wrap justify-evenly max-h-screen overflow-y-auto mx-auto gap-x-2 gap-y-10'>
            {items.map((item: any, index: number) => (
                <ItemCard
                    key={index}
                    name={item.name}
                    link={item.link}
                    price={item.price}
                    image={item.image}
                />
            ))}
        </div>
    );
}

export default Hero;
