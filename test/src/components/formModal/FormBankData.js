import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../buttons/Button";
//import { FormInput } from "./FormInput";
import { useSelector } from "react-redux";
import "./form.scss";

const FormBankData = () => {
  const [value, setValue] = useState({});
  const formBankDataIsActive = useSelector((state) => state.forms.bankData);
  console.log(formBankDataIsActive, "stformBankDataIsActiveate");
  const {
    register,
    handleSubmit,

    //watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      iban: "",
      bic: "",
      bankName: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data, "data");
    setValue(data);
    reset();
  };
  //console.log(value, "value");
  if (!formBankDataIsActive) return null;

  return (
    <div
      className='form__conteiner'
      onClick={(e) => {
        if (e.target.className === "form__conteiner") {
          console.log("вне формы");
        }
      }}>
      <form className='form__content' onSubmit={handleSubmit(onSubmit)}>
        <h2 className='form__title'>Invoice Address</h2>

        <label className='form__item-conteiner'>
          <span>IBAN &#9733;</span>
          <input
            className='form__item'
            {...register("iban", { required: true })}
          />
          {/*{errors.company?.type === "required" && "First name is required"}*/}
        </label>
        <label className='form__item-conteiner'>
          <span>BIC &#9733;</span>
          <input
            className='form__item'
            {...register("bic", { required: true })}
          />
        </label>
        <label className='form__item-conteiner'>
          <span>Bank Name &#9733;</span>
          <input
            className='form__item'
            {...register("bankName", { required: true })}
          />
        </label>

        <div className='form__btns'>
          <Button
            text='Cancel'
            type={"submit"}
            className='button__transparent'
          />
          <Button
            text='Previous'
            className='button__transparent'
            onClick={(e) => {}}
          />
          <Button text='Next' className='button__green' />
        </div>
      </form>
    </div>
  );
};
export default FormBankData;
