import { useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Avatar from "../components/Avatar";
import { MicrophoneIcon, ViewGridIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Footer from "../components/Footer";

export default function Home() {
	const router = useRouter();
	const searchInputRef = useRef(null);

	const search = (e) => {
		e.preventDefault();
		const term = searchInputRef.current.value;

		if (!term) return;

		router.push(`/search?term=${term}`);
	};

	return (
		<div className="flex flex-col items-center justify-center h-screen">
			<Head>
				<title>Google</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{/* Header */}
			<header className="flex w-full p-5 justify-between text-sm text-gray-700">
				{/* Left */}
				<div className="flex space-x-4 items-center">
					<p className="link">About</p>
					<p className="link">Store</p>
				</div>
				{/* Right */}
				<div className="flex space-x-4 items-center">
					<p className="link">Gmail</p>
					<p className="link">Images</p>
					{/* Icon */}
					<ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />

					{/* Avatar */}
					<Avatar url="https://lh3.googleusercontent.com/R29fnXy2JQ_Mov4Jf4X5tonLal1-Sn-AVXusSwQm5LroE4FOwCgkFAEoWHD6FavzwohqtSIrxp_txAYAVA-T8iYer8gZatlwibGd9OXDu8H2JqYJZW_eCFjP_GQpd1Kpa6KDPDjDPxpBL_MtKkV3eZ3CjErqcRfolhG3YhQEaH9iVNrZXaqAnmnQnn2bCQowTuVm6RRwnwdTUa2wpvQftU0cOvC7P2XzFB4uZEFhoyDgEo5Gd5FG0JI6GDdJMpo0qTZiwZmAH76yI6q2Mbb6kJ86a6OgmQOx8zfMe-xBxUF0PJhlEMll2zHGe4ufbHTec99iMCZ9qRlfZn8tGrbHOENeZmr4wIx5cxYEKrz36_gNU3gvY2eSSRyiewsfm4tdwmgqFhwl59ai2vnypjyyzppkHXkxQOTaZz6ZRrsfXxw4zXEtOVec0VLEwtbbJZDGFFfmvgJZFRiS-zNgPhTKBJR_gkQiMYqgnCczsWwJjMs3VEdhbugiwdkULgXmB5JSxGYY5VfjMm_jnWPNvRlhowJVJxfN_nrqkqXsJUKJh4vuVWC5ouS7pbFhqqP9h1LGHZBsV-RhsJD7p1rAeox4iAAXYjbWKJWshVR0f71ZdfkPwCwIyOPC-Lxf2pPMMC2G6QyeEGJalXvntTvx8b4Ca-xvESnAeU4nDpSvNRg6XxCCMcT57vzG2cW7ogjvvFzqEHPSaNUHy1isVZjb6WI79Ebo=s1080-no?authuser=0" />
				</div>
			</header>

			{/* Body */}
			<form className="flex flex-col items-center mt-44 flex-grow w-4/5">
				<Image
					src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
					width={300}
					height={100}
				/>
				<div className="flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
					<SearchIcon className="h-5 mr-3 text-gray-500" />
					<input
						ref={searchInputRef}
						type="text"
						className="flex-grow focus:outline-none"
					/>
					<MicrophoneIcon className="h-5 ml-3 text-gray-500" />
				</div>
				<div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0 sm:flex-row sm:space-x-4">
					<button onClick={search} className="button">
						Google Search
					</button>
					<button onClick={search} className="button">
						I'm Feeling Lucky
					</button>
				</div>
			</form>

			{/* Footer */}
			<Footer />
		</div>
	);
}
