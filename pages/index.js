import Link from "next/link";
import React from "react";
import { useRouter } from 'next/router';

const index = () => {
	const router = useRouter()
	return (
		<div>
			<h1>Home Page</h1>;
			<Link href="/about">
				<a>About</a>
			</Link>
			{" "}
			<Link href="/blogs">
				<a>Blogs</a>
			</Link>
			{" "}
			<Link href="/doc">
				<a>Docs</a>
			</Link>
			{" "}
			<Link href="/products">
				<a>Products</a>
			</Link>
			{" "}
			<Link href="/profile">
				<a>Profile</a>
			</Link>
			<button onClick={() => router.push("/products")}>Place order</button>
		</div>
	)
};
export default index;
