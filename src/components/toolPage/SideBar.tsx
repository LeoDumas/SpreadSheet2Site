import React, { useState } from 'react';
import AddItemModal from './AddItemModal';

type Props = {};

const SideBar = (props: Props) => {
    const [openModal, setOpenModal] = useState(false);

    const AddItemClick = () => {
        setOpenModal(!openModal);
    };

    return (
        <aside className="flex justify-center bg-slate-950 h-screen w-96 text-white pt-10">
            <button
                className="bg-white self-start text-black rounded-md py-1 px-4"
                onClick={AddItemClick}
            >
                Add Item
            </button>

            {openModal && <AddItemModal isOpen={openModal} onClose={AddItemClick} />}
        </aside>
    );
};

export default SideBar;
