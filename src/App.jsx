import { useState } from "react";
import Header from "./components/Header";
import Table from "./components/Table";
import UserInput from "./components/UserInput";

function App() {
  const [investmentInputs, setInvestmentInputs] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });
  const isValidInput = investmentInputs.duration >= 1;

  function handleInputChange(category, value) {
    setInvestmentInputs((prevValues) => {
      return {
        ...prevValues,
        [category]: +value,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput inputs={investmentInputs} onInputChange={handleInputChange} />
      {isValidInput ? (
        <Table inputs={investmentInputs} />
      ) : (
        <p className="center"> Please enter a duration greater than zero.</p>
      )}
    </>
  );
}

export default App;
