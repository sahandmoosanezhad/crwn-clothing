import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import React from 'react';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import SignIn from './components/sign-in/sign-in.component';

// const HatsPage = () => (
//   <div>
//     {/* <button onClick={() => props.history.push('/hats')}>hats</button> */}
//     {/* <Link to={`${props.match.url}/13`}>to topic 13</Link>
//     <Link to={`${props.match.url}/17`}>to topic 17</Link>
//     <Link to={`${props.match.url}/21`}>to topic 21</Link> */}
//     <h1>HATS PAGE</h1>
//   </div>
// );

class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    const {setCurrentUser} = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth =>{
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Routes>
          <Route exact path='/' element={<Homepage />}/>
          <Route path='/shop' element={<ShopPage />}/>
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Navigate to='/' />) : (<SignInAndSignUpPage />)}/>
        </Routes>
      </div>
    ); 
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
});

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);
