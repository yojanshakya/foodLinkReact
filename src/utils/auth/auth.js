export function isAuthenticated(){
	return !!localStorage.getItem('token')
}

export function setToken(token){
	localStorage.setItem('token', token);
	return token;
}

export function getToken(){
	return localStorage.getItem('token')
}

export function setUserType(type){
	return localStorage.setItem('userType', type)
}

export function getUserType(){
	return localStorage.getItem('userType')
}

export function setUserData(userData){
	localStorage.setItem('userData', JSON.stringify(userData))
}

export function getUserData(){
	return JSON.parse(localStorage.getItem('userData'))
}

export function logout(){
	localStorage.removeItem("token");
	localStorage.removeItem("userType");

	window.location.reload()
}
