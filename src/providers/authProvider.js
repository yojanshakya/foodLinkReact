import React, { createContext, useContext } from 'react'

const initialState = {}
const AuthContext = createContext(initialState)
const { Provider } = AuthContext

export function useAuthContext() {
	const appValue = useContext(AuthContext)
	return appValue
}

export function AuthProvider({children}){
	const [isAuth, setIsAuth] = React.useState(true);

	return <Provider value={{
		setIsAuth,
		isAuth
	}}>
		{children}
	</Provider>
}


