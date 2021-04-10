import { useState, useEffect } from 'react'
import './App.css';
import Login from './Login'
import useLocalStorage from './hooks/useLocalStorage'
import Dashboard from './Dashboard'
import {ContactsProvider} from './context/ContactsProvider'
import { ConversationsProvider } from './context/ConversationsProvider';
import { SocketProvider } from './context/SocketProvider';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Cart from './Cart'
import WishList from './WishList'
import Share from './Share'

function App() {

  const [user, setUser] = useState([])
  const [authenticate, setAuthenticate] = useState(false)
  const [id, setId] = useLocalStorage('id')


  useEffect(() => {
    const getUsers = async () => {
      const usersFromServer = await fetchUsers()
      console.log(typeof(usersFromServer))
      console.log(typeof(user))
      console.log(user)
    }

    getUsers()
  }, [])

  const fetchUsers = async () => {
    const res = await fetch('http://localhost:5000/users')
    const users = await res.json()
    console.log(users)
    return users
  }

  const addUser = async (u) => {
    console.log(u)
    const res = await fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(u)
    })
    const data = await res.json()
    console.log(data)
    // setUser(...user, data)
    console.log(user)
  }

  const checkUser = async (credentials) => {
    const res = await fetch(`http://localhost:5000/users/${credentials.id}`)
    const data = await res.json()
    console.log(data)
    if(data.pass !== credentials.pass){
      alert('Wrong Password !')
    }
    else{
      setAuthenticate(true)
      setId(credentials.id)
    }
  }


  const dashboard = (
    <SocketProvider id={id}>
      <ContactsProvider>
        <ConversationsProvider id={id}>
          <Dashboard id={id} />
        </ConversationsProvider>
      </ContactsProvider>
    </SocketProvider>
  )

  return (
    <Router>
      <Route path='/' exact >
      < div className="App">
      {id ? dashboard 
      : <Login onIdSubmit={checkUser} addUser={addUser}/>}
      
    </div>
      </Route>
      <Route path='/Cart' component={Cart} />
      <Route path='/Wishlist' component={WishList} />
      <Route path='/Share' component={Share} />
    </Router>
  );
}

export default App;
