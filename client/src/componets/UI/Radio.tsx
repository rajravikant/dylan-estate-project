import React from "react";

const Radio = ({
  id,
  label,
  group,
  onChange,
  checked,
}: {
  id: string
  label: string
  group: string
  checked?: boolean

  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
}) => {
  return (
    <React.Fragment>
      <input
        type="radio" 
        name={group} 
        id={id} 
        value={label}
        className="peer hidden"
      />
      <label
        htmlFor={id}
        className="block cursor-pointer select-none text-center  p-2 text-gray-500 bg-white border border-gray-200 rounded-full peer-checked:bg-primary  peer-checked:text-white"
      >
        {label}
      </label>
    </React.Fragment>
  );
};

export default Radio;
