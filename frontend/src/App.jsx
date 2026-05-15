import NavBar from "./Components/NavBar";
import HomePage from "./Components/Home/HomePage";

const App = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <NavBar />
      <HomePage />
    </div>
  );
};

export default App;
