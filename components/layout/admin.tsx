import { LayoutProps } from '@/models/index'
import Link from 'next/link'
import React from 'react'
import { Auth } from '../common'

export const AdminLayout = ({ children }: LayoutProps) => {
	return (
		<Auth>
			<div>Admin Layout</div>

			<div>Sidebar</div>

			<Link href="/">
				<a>Home</a>
			</Link>

			<Link href="/about">
				<a>About</a>
			</Link>

			<div>{children}</div>
		</Auth>
	)
}
