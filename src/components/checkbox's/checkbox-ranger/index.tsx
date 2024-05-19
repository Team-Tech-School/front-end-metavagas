
import React, { useState } from "react";

export const SalaryRangeCheckbox = () => {
  const [salary, setSalary] = useState<number>(0);

  const handleSalaryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSalary = parseInt(event.target.value);
    setSalary(newSalary);
  };

  return (
    <div>
      <label htmlFor="salary">Salário: R$ {salary}</label>
      <input
        type="range"
        name="salary"
        min="0"
        max="10000"
        value={salary}
        onChange={handleSalaryChange}
        style={{ width: "100%" }}
      />
    </div>
  );
};
