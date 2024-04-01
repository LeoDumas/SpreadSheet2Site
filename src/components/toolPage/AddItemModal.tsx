import React, { useState } from 'react';
import { type ChangeEvent } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Props = {
    isOpen: boolean,
    onClose: () => void // Function to close the modal
}

type LabelInputProps = {
    label: string,
    type: string,
    value: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

const LabelInput = ({ label, type, value, onChange }: LabelInputProps) => {
    return (
        <div className='flex flex-col mb-3 gap-y-1'>
            <label>{label}</label>
            <input className='border-black/80 border-2 rounded-md' placeholder={label} type={type} value={value} onChange={onChange} />
        </div>
    );
};

const AddItemModal = ({ isOpen, onClose }: Props) => {
    const [name, setName] = useState<string>('');
    const [price, setPrice] = useState<string>('');
    const [link, setLink] = useState<string>('');
    const [image, setImage] = useState<string>('');

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };
    const handlePriceChange = (event: ChangeEvent<HTMLInputElement>) => {
        setPrice(event.target.value);
    };
    const handleLinkChange = (event: ChangeEvent<HTMLInputElement>) => {
        setLink(event.target.value);
    };
    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        setImage(event.target.value);
    }

    const handleAddButtonClick = () => {
        if (!name.trim()) {
            // Show error notification if name is not filled
            toast.error('Name is required!', { position: "bottom-right", autoClose: 5000 });
            return;
        }

        const item = {
            name,
            price,
            link,
            image
        };
        const items = JSON.parse(localStorage.getItem('items') || '[]');
        items.push(item);
        localStorage.setItem('items', JSON.stringify(items));

        // Show success notification
        toast.success('Item added successfully!', { position: "bottom-right", autoClose: 5000 });

        // Clear input fields
        setName('');
        setPrice('');
        setLink('');
        setImage('');
    };

    return (
        <div className={isOpen ? "fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black/50 text-black" : "hidden"}>
            <div className="relative bg-white rounded-md shadow-md">
                <button className="absolute top-0 right-0 p-2" onClick={onClose}>Close</button>
                <div className="flex flex-col p-6">
                    <LabelInput label="Name" type="text" value={name} onChange={handleNameChange} />
                    <LabelInput label="Price" type="text" value={price} onChange={handlePriceChange} />
                    <LabelInput label="Link" type="text" value={link} onChange={handleLinkChange} />
                    <LabelInput label="Image" type="text" value={image} onChange={handleImageChange} />
                    <button className='bg-black text-white py-1 px-4 self-start rounded-md mx-auto' onClick={handleAddButtonClick}>Add</button>
                </div>
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    )
}

export default AddItemModal;
