import {useState, useEffect} from 'react'

const PREFIX = 'myntra-chatApp'

const useLocalStorage = (key, initialValue) => {
    const prefixedKey = PREFIX + key
    const [user, setUser] = useState(()=>{
        const jsonUser = localStorage.getItem(prefixedKey)
        if(jsonUser!==null) return JSON.parse(jsonUser)
        if(typeof initialValue === 'function'){
            return initialValue()
        }else{
            return initialValue
        }
    })

    useEffect(() => {
        localStorage.setItem(prefixedKey, JSON.stringify(user))
    }, [prefixedKey, user])
    return [user, setUser]
}

export default useLocalStorage
