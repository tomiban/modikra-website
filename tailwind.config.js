/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			animation: {
				"tracking-in-contract": "tracking-in-contract 0.4s linear both",
			},
			backgroundImage: {
				"hero-img": "url('assets/img/banner.jpg')",
			},
			fontFamily: {
				montserrat: ["Montserrat", "sans"],
			},
		},
	},
	darkMode: "class",
};
