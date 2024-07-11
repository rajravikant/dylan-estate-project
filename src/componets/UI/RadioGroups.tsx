import { Radio, RadioGroup, Field, Label } from "@headlessui/react";
import { cn } from "../../utils"; 
function RadioGroups({
  legend,
  options,
  value,
  type = "modern",
  className,
  onChange,
}: {
  legend?: string;
  options: string[];
  className?: string;
  value: string;
  type?: "classic" | "modern";
  onChange: (e: string) => void;
}) {
  return (
    <>
      {legend && (
        <h3 className="text-lg font-semibold leading-6 text-gray-900">
          {legend}
        </h3>
      )}

      <RadioGroup
        className={cn("mt-6 grid lg:grid-cols-4  gap-5", className ?? "")}
        value={value}
        onChange={(e) => onChange(e)}
        aria-label="Server size"
      >
        {options.map((option) => {
          if (type === "classic") {
            return (
              <Field
                key={option}
                className="flex items-center gap-2 w-full "
              >
                <Radio
                  value={option}
                  className="group flex size-5 items-center justify-center rounded-full border bg-white data-[checked]:bg-primary"
                >
                  <span className="invisible size-2 rounded-full bg-white group-data-[checked]:visible" />
                </Radio>
                <Label>{option}</Label>
              </Field>
            );
          } else if (type === "modern") {
            return (
              <Field key={option}>
                <Radio value={option} className="group">
                  <Label className="text-center block text-sm p-2 text-gray-500 bg-white border border-gray-200 rounded-full group-data-[checked]:bg-primary  group-data-[checked]:text-white">
                    {option}
                  </Label>
                </Radio>
              </Field>
            );
          }
        })}
      </RadioGroup>
    </>
  );
}

export default RadioGroups;
