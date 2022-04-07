import { authApi } from '@/api/auth-api'
import React from 'react'
import { useAuth } from '@/hooks/index'

const LoginPage = () => {
	const { profile, login, logout } = useAuth()

	const handleLoginClick = async () => {
		try {
			await login()
			console.log('Redirect to dashboard')
		} catch (error) {
			console.log('fail to login', error)
		}
	}

	const handleLogoutClick = async () => {
		try {
			await logout()
			console.log('Redirect to login page')
		} catch (error) {
			console.log('fail to logout', error)
		}
	}

	return (
		<div>
			<div>Login Page</div>

			<p>Profile: {JSON.stringify(profile || {}, null, 4)}</p>

			<button onClick={handleLoginClick}>Login</button>
			<button onClick={handleLogoutClick}>Logout</button>
		</div>
	)
}

export default LoginPage
