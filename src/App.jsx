import Header from "./components/header/header";
import Main from "./components/main/Main";
import { GlobalStyles } from "./styles/global-styles";

const App = () => {
	return (
		<>
			<GlobalStyles />
			<Header />
			<Main />
		</>
	);
};

export default App;
