interface IFieldProps {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
}

function TextField({ label, name, type, placeholder }: IFieldProps) {
  return (
    <div>
      <label htmlFor={name} className="text-base">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        className="input rounded-lg w-full"
        placeholder={placeholder ? placeholder : ""}
      />
    </div>
  );
}

export default TextField;
