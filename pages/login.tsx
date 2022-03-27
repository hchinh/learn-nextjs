import { authApi } from '@/api/auth-api'
import React from 'react'

const LoginPage = () => {
	const handleLoginClick = async () => {
		try {
			await authApi.login({
				username: 'test',
				password: '123456',
			})
		} catch (error) {
			console.log('fail to login', error)
		}
	}

	const handleGetProfileClick = async () => {
		try {
			await authApi.getProfile()
		} catch (error) {
			console.log('fail to get profile', error)
		}
	}

	const handleLogoutClick = async () => {
		try {
			await authApi.logout()
		} catch (error) {
			console.log('fail to logout', error)
		}
	}

	return (
		<div>
			<div>Login Page</div>

			<button onClick={handleLoginClick}>Login</button>
			<button onClick={handleGetProfileClick}>Get Profile</button>
			<button onClick={handleLogoutClick}>Logout</button>
		</div>
	)
}

export default LoginPage
