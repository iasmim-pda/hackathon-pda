import { HotelFilter } from "./components/hotels-filter/hotels-filter";

function App() {
	return (
		<div>
			<header>
				<h1>Hotels</h1>
			</header>
			<aside>
				<HotelFilter />
			</aside>
			<main>{/* <HotelsList /> */}</main>
		</div>
	);
}

export default App;
