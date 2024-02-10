import {useState} from 'react'
import { useEffect } from 'react';
import Product from '../components/Product';
import Spinner from '../components/Spinner'
import { NavLink } from 'react-router-dom';
import logo from '../logo.png'
import {FaShoppingCart} from 'react-icons/fa'
import '../components/Navbar.css'
import { useSelector } from 'react-redux';


const  Home=()=>{

    const API_URL="https://fakestoreapi.com/products";
    const[loading,setloading]=useState(false);

    const cart = useSelector((state) => state);
    
    const[posts,setPosts]=useState([]);
    async function fetchData(){
        setloading(true);

        try{
            const res=await fetch(API_URL);
            const data=await res.json();

            setPosts(data);
        }
        catch(error){
            console.log("data not found");
            setPosts([]);

        }
        setloading(false);
    }

    useEffect(()=>{
        fetchData();
    },[])


    return(
        <div>
        <div>
        <div className='nav-container'>
            
            <div className='overlay'>
                <div className='nav-bar'>
                  <div className='hover:cursor-pointer'>
                    <NavLink to="/">
                    <img src={logo} />
                    </NavLink>
                  </div>
                  <div className='links'>

                     <NavLink to="/">
                        <p className='home'>Home</p>
                    </NavLink>
                     
                     
                    <NavLink  to="/cart">
                        <div className='icon'>
                            < FaShoppingCart/>
                            {
                                cart.length>0 &&
                                <span
                                className='absolute top-1 right-2 bg-green-600 text-xs w-5 h-5 flex 
                                justify-center items-center animate-bounce rounded-full text-white'
                                >{cart.length}
                                    
                                </span>
                            }
                        </div>
                    </NavLink>

                   </div>
                </div>

                <div className='info'>
                    <div>
                        <h4 className='win'>Winter Collection</h4>
                    </div>
                    <div>
                        <h2 className='Main'>INTRODUCING </h2>
                             <h2 className='Main'> NEW ARRIVALS</h2>
                    </div>
                    <div className='desc'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        </p>
                    </div>
                    <button className='btn'>View Collection</button>

                </div>
            </div>
         </div>
         
         </div>
        <div className=''>
            {
                loading ? <Spinner/> :
                posts.length >0 ?
                (
                <div className='grid xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3
                          lg:grid-cols-4 max-w-6xl p-2 mx-auto
                             space-y-10 space-x-5 min-h-[80vh] bg-[#f7f3f5]'>
                    {
                        posts.map( (post)=>(
                            <Product key ={post.id} post={post}/>
                        ))
                    }
                    </div>):
                    <div>
                        <p>No data found</p>
                    </div>
            }
        </div>
        </div>
    );
};

export default Home