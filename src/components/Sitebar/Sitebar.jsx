import { NavLink } from 'react-router-dom';
import logo from '../../assets/icons/logo.svg'
import { RiHome8Fill } from "react-icons/ri";
import { LuChefHat } from "react-icons/lu";
import { FaBoxOpen } from "react-icons/fa";
import { GrGroup } from "react-icons/gr";
import { MdOutlineTableBar } from "react-icons/md";

export default function Sitebar() {
    return (
        <>
            <nav>
                <ul className="sitebar">
                    <li className="sitebar_pages">
                        <img className='sitebar_logo' src={logo} alt="icon" />
                    </li>
                    <NavLink to='/'>
                        <li className="sitebar_pages">
                            <RiHome8Fill />
                        </li>
                    </NavLink>

                    <NavLink to='/toorder'>
                        <li className="sitebar_pages">
                            <LuChefHat />
                        </li>
                    </NavLink>

                    <NavLink to='/toorder'>
                        <li className="sitebar_pages">
                            <FaBoxOpen />
                        </li>
                    </NavLink>

                    <NavLink to='/toorder'>
                        <li className="sitebar_pages">
                            <GrGroup />
                        </li>
                    </NavLink>

                    <NavLink to='/toorder'>
                        <li className="sitebar_pages">
                            <MdOutlineTableBar />
                        </li>
                    </NavLink>

                </ul>
            </nav>
        </>
    )
}
