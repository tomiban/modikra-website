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
				"catalogo-1": 'url("https://images.unsplash.com/photo-1422190441165-ec2956dc9ecc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80")',
				"catalogo-2": "url('https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjM0MTM2fQ&auto=format&fit=crop&w=1600&q=80')",
			},
			fontFamily: {
				montserrat: ["Montserrat", "sans"],
			},
		},
	},
	darkMode: "class",
};
