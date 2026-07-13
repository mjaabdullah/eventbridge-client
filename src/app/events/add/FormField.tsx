import { TextField, Label, Input, TextArea, FieldError } from "@heroui/react";

interface FormFieldProps {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
  multiline?: boolean;
  rows?: number;
  min?: string;
  step?: string;
}

const FormField = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  error,
  placeholder,
  multiline = false,
  rows = 4,
  min,
  step,
}: FormFieldProps) => {
  const controlClassName =
    "w-full rounded-lg border border-[#E2E8F0] bg-white px-3 py-2.5 text-sm text-[#0F172A] outline-none transition-colors placeholder:text-[#0F172A]/40 focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20";

  return (
    <TextField
      id={id}
      value={value}
      onChange={onChange}
      isRequired
      isInvalid={!!error}
      className="flex flex-col gap-1.5"
    >
      <Label className="text-sm font-medium text-[#0F172A]">{label}</Label>
      {multiline ? (
        <TextArea
          rows={rows}
          placeholder={placeholder}
          className={`${controlClassName} resize-none`}
        />
      ) : (
        <Input
          type={type}
          min={min}
          step={step}
          placeholder={placeholder}
          className={controlClassName}
        />
      )}
      {error && (
        <FieldError className="text-xs font-medium text-red-500">
          {error}
        </FieldError>
      )}
    </TextField>
  );
};

export default FormField;
