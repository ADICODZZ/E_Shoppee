import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import './cart.css';
import { NavLink } from 'react-router-dom';
import logo from '../logo(black).png'
import {FaShoppingCart} from 'react-icons/fa'



const  Cart=()=>{

    const {cart} = useSelector((state)=> state);

    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
      }, [cart]);

    return(
      <div>
      <div className=''>
                <div className='nav-bar2'>
                  <div className="logo2 cursor-pointer">
                  <NavLink to="/">
                    <img src={logo} />
                    </NavLink>
                  </div>
                  <div className='links'>

                     <NavLink to="/">
                        <p className='home2'>Home</p>
                    </NavLink>
                     
                     
                     <NavLink to="/cart">
                        <div className='icon2'>
                            <FaShoppingCart/>
                            {
                                cart.length>0&&
                                <span
                                className='absolute top-1 right-0.5 bg-green-600 text-xs w-5 h-5 flex 
                                justify-center items-center animate-bounce rounded-full text-white'
                                >{cart.length}
                                    
                                </span>
                            }
                        </div>
                    </NavLink>

                   </div>
                </div>
                </div>
                
        <div>
            {cart.length > 0 ? (
        <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center">
          <div className="w-[100%] md:w-[60%] flex flex-col p-2">
            {cart.map((item, index) => {
              return <CartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          <div className=" bg-[#f5f5f5] w-[100%] h-[90%] md:w-[40%] mt-5  flex flex-col items-center py-10 ">
            <div className="flex flex-col p-5 gap-5 my-14  h-[100%] justify-between">
            <div className="flex flex-col gap-5 ">
            <div className="font-semibold text-xl text-green-800 ">Your Cart</div>
              <div className="font-semibold text-5xl text-green-700  -mt-5">Summary</div>
              <p className="text-xl">
                <span className="text-gray-700 font-semibold text-xl">Total Items: {cart.length}</span>
              </p>
            </div>
            </div>

            <div className="flex flex-col">
              <p className="text-xl font-bold"><span className="">Total Amount:</span> ${totalAmount}</p>
              <button className="bg-green-700 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 
              font-bold hover:text-green-700 p-3 text-xl ">CheckOut Now</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-700 font-semibold text-xl mb-2">
            Your cart is empty!
          </h1>
          <Link to={"/"}>
            <button className="uppercase bg-green-600 hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-semibold
             hover:text-green-700 p-3 px-10 tracking-wider ">
              Shop Now
            </button>
          </Link>
        </div>
      )}


        </div>
        </div>
    )
}

export default Cart;