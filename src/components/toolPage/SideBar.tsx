import React, { useState } from 'react';
import { type ChangeEvent } from 'react';
import AddItemModal from './AddItemModal';
import * as XLSX from 'xlsx';

interface Props {}

const SideBar: React.FC<Props> = (props) => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [file, setFile] = useState<File | null>(null);
    const [jsonData, setJsonData] = useState<string>('');

    const AddItemClick = () => {
        setOpenModal(!openModal);
    };

    const handleConvert = () => {
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                if (e.target) {
                    const data = e.target.result as ArrayBuffer;
                    const workbook = XLSX.read(new Uint8Array(data), { type: 'array' });
                    const sheetName = workbook.SheetNames[0];
                    const worksheet = workbook.Sheets[sheetName];
                    const json = XLSX.utils.sheet_to_json(worksheet);

                    // Convert keys to lowercase
                    const jsonWithLowercaseKeys = json.map((item: any) => {
                        const newItem: any = {};
                        for (const key in item) {
                            if (Object.prototype.hasOwnProperty.call(item, key)) {
                                newItem[key.toLowerCase()] = item[key];
                            }
                        }
                        return newItem;
                    });

                    setJsonData(JSON.stringify(jsonWithLowercaseKeys, null, 2));
                    // Save JSON data to localStorage
                    localStorage.setItem('items', JSON.stringify(jsonWithLowercaseKeys));
                }
            };
            reader.readAsArrayBuffer(file);
        }
    };

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0]);
        }
    };

    return (
        <aside className="flex flex-col justify-center bg-slate-950 h-screen w-80 text-white pt-10">
            <button
                className="bg-white self-start text-black rounded-md py-1 px-4"
                onClick={AddItemClick}
            >
                Add Item
            </button>

            <div className=' flex flex-col'>
                <input type="file" accept=".xls,.xlsx" onChange={handleFileChange} />
                <button onClick={handleConvert}>Convert</button>
                <pre>{jsonData}</pre>
            </div>

            {openModal && <AddItemModal isOpen={openModal} onClose={AddItemClick} />}
        </aside>
    );
};

export default SideBar;
