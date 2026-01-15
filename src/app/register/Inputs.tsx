import { inputValidProp } from "@/types/validate";
import { Requeriment, validInput } from "./Validate";

export const InputValid = ({ validation, ...props }: inputValidProp) => {
  const requeriment = validInput({
    value: String(props.value ?? ""),
    valid: validation,
  });

  return (
    <>
      <input
        className={`peer ${props.className}`}
        type={props.type}
        placeholder={props.placeholder}
        name={props.name}
        required={props.required}
        value={props.value || ""}
        onChange={props.onChange}
      />
      <div className="hidden peer-focus:block  absolute z-10 ">
        <Requeriment value={requeriment} />
      </div>
    </>
  );
};
