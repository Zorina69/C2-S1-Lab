import pnLogo from "./assets/pn-logo.png";
import Header from "./components/Header.jsx"; // Ensure Header is imported
import Scores from "./components/Scores.jsx";

function App() {
  return (
    <>
      <Header /> {/* Ensure Header component is used */}
      <Scores/>
    </>
  );
}

export default App;
