import React from 'react'
import './Header.scss'
import {ReactComponent as Logo} from "../../assets/crown.svg";
import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import CartIcon from '../CartIcon/CartIcon'
import CartDropdown from '../CartDropdown/CartDropdown'
import { selectCartHidden } from '../../redux/cart/cart-selectors'
import { selectCurrentUser } from '../../redux/user/user-selectors'
import { createStructuredSelector } from 'reselect'

function Header({ currentUser, hidden }) {
    return (
        <div className="header">
            <Link className="logo-container" to='/' >
                <Logo className="logo" />
            </Link>
            <div className="options">
                <Link className="option" to="/shop"> Shop </Link>
                <Link className="option" to="/contact"> Contact </Link>
                {
                    currentUser ? 
                    <div 
                        className="option" 
                        role="button"
                        onClick={() => auth.signOut()}
                    >
                        Sign Out
                    </div>
                    :
                    <Link className="option" to="/signin"> Sign In</Link>
                }
                <CartIcon />
            </div>
            {
                hidden ?
                null :
                <CartDropdown />
            }
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)
