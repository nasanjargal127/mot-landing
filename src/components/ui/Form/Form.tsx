import React, { ReactNode } from "react";

type FormProps = {
  icon: ReactNode;
  placeholder: string;
  type?: string;
  name?: string;
};

const Form: React.FC<FormProps> = ({ icon, placeholder, type = "text", name = "text" }: FormProps) => {
  return (
    <div className="relative mt-2 rounded-full h-12 shadow-sm">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">{icon}</div>
      <input
        type={type}
        name={name}
        className="block w-full h-full rounded-full border-0 py-2 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
        placeholder={placeholder}
      />
    </div>
  );
};
export default Form;
