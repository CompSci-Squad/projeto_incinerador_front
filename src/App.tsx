import "./App.css";

type Burro = {
	nome: string;
	idade: number;
};

function App() {
	const henri: Burro = { nome: "henri", idade: 19 };

	return (
		<>
			<p>{henri.nome}</p>
      <p>{henri.idade}</p>
		</>
	);
}

export default App;
