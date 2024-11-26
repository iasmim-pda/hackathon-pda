import { useLocation, useNavigate } from "react-router-dom";
import "./hotels-filter.css";
import { useEffect } from "react";

export const HotelFilter = () => {
	//React Tanstack Query
	// const { data, isLoading} = useQuery("hotels", fetcher); fetcher o nativo do js ou o axios
	const location = useLocation();
	const navigate = useNavigate();
	// const [data, setData] = useState([]);
	const searchParams = new URLSearchParams(location.search);
	//Quero construir uma URL com meus parametros de pesquisa

	const handleFilter = (type, value) => {
		searchParams.set(type, value); // O set substitui o que tem antes se usar a mesma chave/type, o append adiciona
		console.log(searchParams.toString());

		navigate({ search: searchParams.toString() });
	};

	useEffect(() => {
		console.log(searchParams.get("stars"));
		console.log(
			"Componente re-renderizou, nesse ocorreria uma chamada pra api passando os novos parametros de filtro"
		);
		//Segurança: Sanitização de dados
		// fetch(`http://localhost:3000/hotels?${searchParams.toString()}`);
		//Se for filtro dinamico!!!
		// setData(data);
		//Requisições async
	}, [location.search]);

	const handleReset = () => {};

	return (
		<div className="hotel-filter">
			<h2>Filter Hotels</h2>
			<div className="filter-fields">
				<div className="filter-group">
					<label htmlFor="stars">Stars</label>
					<select
						id="stars"
						name="stars"
						onChange={(e) => handleFilter("stars", e.target.value)}
					>
						<option value="">All</option>
						<option value="5">5 Stars</option>
						<option value="4">4 Stars</option>
						<option value="3">3 Stars</option>
						<option value="2">2 Stars</option>
						<option value="1">1 Star</option>
					</select>
				</div>

				<div className="filter-group">
					<label htmlFor="city">City</label>
					<input
						id="city"
						name="city"
						type="text"
						placeholder="Enter city"
						onChange={(e) => handleFilter("city", e.target.value)}
					/>
				</div>

				<div className="filter-group">
					<label htmlFor="state">State</label>
					<input
						id="state"
						name="state"
						type="text"
						placeholder="Enter state"
						// value={filters.state || ""}
						onChange={(e) => handleFilter("state", e.target.value)}
					/>
				</div>

				<div className="filter-group">
					<label htmlFor="country">Country</label>
					<input
						id="country"
						name="country"
						type="text"
						placeholder="Enter country"
						// value={filters.country || ""}
						onChange={(e) => handleFilter("country", e.target.value)}
					/>
				</div>

				<div className="filter-group">
					<label htmlFor="amenities">Amenities</label>
					<input
						id="amenities"
						name="amenities"
						type="text"
						placeholder="E.g., Pool, Gym"
						onChange={(e) => handleFilter("amenities", e.target.value)}
					/>
				</div>
			</div>

			<div className="filter-actions">
				Se não for filtro dinamico, podem passar a função de fetch no click do
				botão Apply Filters
				<button className="apply-button" onClick={handleFilter}>
					Apply Filters
				</button>
				<button className="reset-button" onClick={handleReset}>
					Reset
				</button>
			</div>
		</div>
	);
};
