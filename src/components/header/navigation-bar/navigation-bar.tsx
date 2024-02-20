import React from 'react'
import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useSelector } from 'react-redux';
import { filteredProducts } from '../../../store/filter-slice';
import { RootState } from '../../../store/store';
import { useAppDispatch } from '../../../hooks/hooks';

const NavigationBar = () => {
    const dispatch = useAppDispatch()

    const searchText = useSelector((state: RootState) => state.searchText)
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(filteredProducts(e.target.value))
    }

    return (
        <nav className='flex items-center justify-around py-5 border-b-2'>
            <div></div>
            <div className="nav-container md:w-3/6 ">
                    <input
                        className="outline-none border py-1 px-5 rounded-md md:w-full "
                        type="text"
                        value={searchText}
                        onChange={handleInputChange}
                        placeholder="Enter your search shoes."
                    />
                </div>
            <div>
                <ul className='flex gap-3 text-2xl'>
                    <li><FiHeart /></li>
                    <li><AiOutlineShoppingCart /></li>
                    <li><AiOutlineUserAdd /></li>
                </ul>
            </div>
        </nav>
    )
}

export default NavigationBar