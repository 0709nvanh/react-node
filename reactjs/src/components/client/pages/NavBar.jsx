import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { BsFillBagFill } from "react-icons/bs";
import { useState } from "react";
import { useEffect } from "react";


const NavBar = () => {
    const [user, setUser] = useState({})
    const navigate = useNavigate()
    
    useEffect(() => {
        const auth = localStorage.getItem('auth')
        if(auth !== ""){
            setUser(JSON.parse(auth)?.user)
        }
    }, [])

    const onLogOut = () => {
        localStorage.removeItem('auth')
        navigate('/')
    }
  return (
    <div className="w-full bg-[#ccc]">
        <div className="flex justify-between mx-auto px-[90px] items-center">
            <div className="py-3">
                <ul className="flex flex-row items-center justify-center font-roboto">
                    <li className="mr-[10px] color-[#252a2b]">
                        <NavLink to="/" className="nav-link hover:text-gray-600 transition-all duration-200 cursor-default">Trang chủ</NavLink>
                    </li>
                    <li className="listNav mx-[10px] color-[#252a2b] relative ">
                        <NavLink to="/product" className="flex justify-center items-center nav-link hover:text-gray-600 transition-all duration-200 cursor-default" >
                            Sản phẩm
                        </NavLink>
                    </li>
                    <li className="mx-[10px] color-[#252a2b]">
                        <NavLink to="/contact" className="nav-link hover:text-gray-600 transition-all duration-300 ease-linear cursor-default">Danh mục</NavLink>
                    </li>
                    <li className="mx-[10px] color-[#252a2b]">
                        <NavLink to="/contact" className="nav-link hover:text-gray-600 transition-all duration-200 cursor-default">Liên hệ</NavLink>
                    </li>
                </ul>
            </div>
            <div className="image py-4">
                <img alt="" className="h-[39px] w-[150px]" src="https://cdn.shopify.com/s/files/1/0031/3072/0369/files/logo_2_150x@2x.png?v=1622352543"/>
            </div>
            <div className="menu-right flex items-center font-roboto">
                {
                    user?.username ? 
                    <div className="px-3">
                        <Link className="px-2 mx-[10px] hover:text-gray-600" to="login">{user?.username}</Link>
                        <button onClick={onLogOut} className="mx-[10px] hover:text-gray-600">Log out</button>
                    </div> : 
                    <div className="px-3">
                        <Link className="px-2 mx-[10px] hover:text-gray-600" to="login">Log in</Link>
                        <Link className="mx-[10px] hover:text-gray-600" to="sign-up">Sign up</Link>
                    </div>
                }
                <div className="flex ">
                    <div className="items-center">
                        <Link to=""><BsFillBagFill /></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default NavBar;
