import React from "react";

export const FormInput = ({ name, label, register, className }) => {
  console.log(register);
  return (
    <>
      <label className='form__item-conteiner'>
        <span>{label}</span>
        <input name={name} className={className} />
      </label>
    </>
  );
};
