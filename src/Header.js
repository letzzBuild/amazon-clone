import React from 'react'
import './App.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';


export default function Header(props) {
    return (
        <div className="header">
            <img className="header_img" src="https://1079life.com/wp-content/uploads/2018/12/amazon_PNG11.png"
                alt="not found" />

            <div className="header_search_container">
                <input type="text" className="header_search_box" />
                <SearchIcon class="header_search_icon"></SearchIcon>
                
            </div>

            <div className="header_nav">
                <div className="header_nav_option">
                    <spam className="option_line_1">Country</spam>
                    <spam className="option_line_2">India</spam>
                    {/* <spam>Sign In</spam> */}
                </div>
                <div className="header_nav_option">
                    <spam className="option_line_1">Hello Guest</spam>
                    <spam className="option_line_2">Accounts & Lists</spam>
                </div>
                <div className="header_nav_option">
                    <spam className="option_line_1">Returns</spam>
                    <spam className="option_line_2">& Orders</spam>
                </div>
                <div className="shopping_basket_option">
                    <ShoppingCartIcon className="header_shopping_icon"></ShoppingCartIcon>
                    <spam className="cart_count">1</spam>
                    
                </div>
            </div>
        </div>
    )
}
