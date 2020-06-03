import React from 'react';
// import logo from './logo.svg';
import './App.css';
import HomePage from './pages/HomePage/HomePage'
import ShopPage from './pages/ShopPage/ShopPage'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Header from './components/Header/Header'
import AuthPage from './pages/AuthPage/AuthPage'
import CheckoutPage from './pages/CheckoutPage/CheckoutPage'
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user-actions'
import { selectCurrentUser } from './redux/user/user-selectors'
import { createStructuredSelector } from 'reselect'
// import { selectShopCollectionArray } from './redux/shop/shop-selector'



class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {

    const { setCurrentUser } = this.props;


    this.unsubscribeFromAuth = auth.onAuthStateChanged(async user => {

      if (user) {

        const userRef = createUserProfileDocument(user);

        (await userRef).onSnapshot(snapshot => {

          setCurrentUser({
            id: snapshot.id,
            ...snapshot.data()
          })
        })
      }
      else {
        setCurrentUser(user);
      }

    })

  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {

    const { currentUser } = this.props;

    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/shop" component={ShopPage}></Route>
            <Route exact path="/signin" render={() => (
              currentUser ? <Redirect to='/' /> : <AuthPage />
            )}
            />
            <Route exact path="/checkout" component={CheckoutPage} ></Route>
            <Route exact path="/" component={HomePage} ></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps =  createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => (dispatch(setCurrentUser(user)))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
