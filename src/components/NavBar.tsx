import React from 'react'

type Props = {}

const NavBar = (props: Props) => {
    return (
        <nav className=" flex justify-between items-center bg-background mt-6 text-black">
            <div className="ml-10">
                <h1>XLSX2Site</h1>
            </div>
            <ul className=" flex items-center mr-10 gap-x-8">
                <li><a href="/tool">Tool</a></li>
                <li><a href="">Features</a></li>
                <li><a href="">Pricing</a></li>
                <li><a href="">Examples</a></li>
                <li><a href="">Contact</a></li>
                <li>
                    <button className=" bg-black text-white rounded-md py-2 px-6">
                        Register
                    </button>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar