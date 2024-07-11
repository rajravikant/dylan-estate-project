import {ReactNode} from "react";

const FieldSet = ({ legend,children}: {
  legend: string;
  children: ReactNode;
}) => {
  return (
    <fieldset>
      <legend className="text-lg font-semibold leading-6 text-gray-900">
        {legend}
      </legend>
      {children}
    </fieldset>
  );
};

export default FieldSet;
