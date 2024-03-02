import Input from "./Input";

export default function UserInput({ inputs, onInputChange }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <Input
          label="Initial investment"
          type="number"
          initialValue={inputs.initialInvestment}
          category="initialInvestment"
          onValueChange={onInputChange}
        />
        <Input
          label="Annual investment"
          type="number"
          initialValue={inputs.annualInvestment}
          category="annualInvestment"
          onValueChange={onInputChange}
        />
      </div>
      <div className="input-group">
        <Input
          label="Expected return"
          type="number"
          initialValue={inputs.expectedReturn}
          category="expectedReturn"
          onValueChange={onInputChange}
        />
        <Input
          label="Duration"
          type="number"
          initialValue={inputs.duration}
          category="duration"
          onValueChange={onInputChange}
        />
      </div>
    </div>
  );
}
