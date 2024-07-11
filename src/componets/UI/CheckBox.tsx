import React, { ChangeEvent, ReactNode } from 'react';

const CheckBox = ({
  option,
  icon,
  value,
  onChange,
}: {
  option: string
  icon?: ReactNode
  value?: boolean
  onChange: (e:ChangeEvent<HTMLInputElement>) => void
}) => {
  if (icon) {
    return (
      <div className="flex items-center flex-col gap-4 gap-x-3 col-span-1">
        {icon}
        <label htmlFor={option} className="block text-gray-900">
          {option}
        </label>
        <input
          id={option} name={option}
          type="checkbox" checked={value} onChange={onChange}
          className="size-5 rounded-md border-gray-300 text-primary focus:ring-primary"
        />
      </div>
    );
  }
  return (
    <div className="flex items-center gap-x-3 col-span-1">
      <input
        id={option}
        type="checkbox"
        className="size-5 rounded-md border-gray-300 text-primary focus:ring-primary"
      />

      <label htmlFor={option} className="block text-gray-900">
        {option}
      </label>
    </div>
  );
};

export default CheckBox;
