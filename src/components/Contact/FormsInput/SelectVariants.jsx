import React from 'react';
import { Select, Option } from '@material-tailwind/react';

function SelectVariants({ label, className, value, onChange }) {
  return (
    <div >
      <Select
        variant="standard"
        label={label}
        value={value}
        onChange={onChange}
        className={className}
      >
        <Option value="select-requirement" disabled>
          Select Requirement
        </Option>
        <Option value="creators">Creators</Option>
        <Option value="case-study">Case Study</Option>
      </Select>
    </div>
  );
}

export default SelectVariants;

