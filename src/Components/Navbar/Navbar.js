import {React,useState,useEffect, useRef} from "react";
import { FaUserCircle } from "react-icons/fa";
import {GiHamburgerMenu} from 'react-icons/gi'
const Navbar = () => {
     const [show, setShow] = useState(true);
     const [lastScrollY, setLastScrollY] = useState(0);
     const [showMenu,setShowMenu] = useState(true);
     const ulRef = useRef();

     const navbarHandler = () => {
          const h = ulRef.current.children[0].getBoundingClientRect().height;
          const len = ulRef.current.children.length;
          if(showMenu){
               ulRef.current.style.height = `${h*len}px`
               setShowMenu(false);
          }else{
               ulRef.current.style.height = `0px`
               setShowMenu(true);
          }
     }
     
     const controlNavbar = () => {
       if (typeof window !== 'undefined') { 
          if (window.scrollY > lastScrollY) { 
               setShow(false); 
          } else { 
               setShow(true);  
          }
         setLastScrollY(window.scrollY); 
       }
     };
   
     useEffect(() => {
       if (typeof window !== 'undefined') {
         window.addEventListener('scroll', controlNavbar);
   
         return () => {
           window.removeEventListener('scroll', controlNavbar);
         };
       }
     }, [lastScrollY]);
  return (
     <>
    <nav className={`navbar ${show && 'hidden'}`}>
      <div className="navbarItem">
          <div onClick={navbarHandler} className="hamburger">
               <GiHamburgerMenu/>
          </div>
        <ul ref={ulRef}>
          <li>
            <a href="#StatisticWrapper"> Statistis</a>
          </li>
          <li>
            <a href="#proposal_wrapper">Proposal</a>
          </li>
          <li>
            <a href="#clientWrapper">Client Review</a>
          </li>
        </ul>
        <div className="user">
          <span>verify account</span>
          <div  className="userIcon">
               <FaUserCircle />
          </div>
        </div>
      </div>
    </nav>
     </>
  );
};

export default Navbar;
