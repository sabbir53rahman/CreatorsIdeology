
import React from 'react';
// InputVariants.jsx
import { Input } from '@material-tailwind/react';
function InputVariants({ type, label, placeholder, className }) {
  return (
    <div>
      <Input type={type} variant="static" label={label} placeholder={placeholder} className={className} />
    </div>
  );
}

export default InputVariants;
