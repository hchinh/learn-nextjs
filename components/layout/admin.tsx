import { LayoutProps } from '@/models/index'
import Link from 'next/link'
import React from 'react'

export const AdminLayout = ({ children }: LayoutProps) => {
	return (
		<div>
			<div>Admin Layout</div>

			<div>Sidebar</div>

			<Link href="/">
				<a>Home</a>
			</Link>

			<Link href="/about">
				<a>About</a>
			</Link>

			<div>{children}</div>
		</div>
	)
}
