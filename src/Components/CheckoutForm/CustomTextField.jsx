import React from "react";
import { useFormContext, Controller } from "react-hook-form";

function FormInput({ name, label, id }) {
  const { control } = useFormContext();
  const isError = false;

  return (
    <>
      <Controller
        // as={<input />}
        name={name}
        control={control}
        label={label}
        error={isError}
        render={({ field }) => (
          <div>
            <label className="text-black-400 text-sm " htmlFor={name}>
              {label}*
            </label>
            <input
              className="border-b-2 border-gray-300 outline-none"
              id={name}
              name={name}
              required
            />
          </div>
        )}
      />
    </>
  );
}
export default FormInput;
