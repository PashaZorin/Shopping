import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from "../buttons/Button";
//import { FormInput } from "./FormInput";
import { useDispatch, useSelector } from "react-redux";
import "./form.scss";
import {
  bankData,
  contact,
  invoiseAddress,
} from "../../store/redusers/formsSlise";

const FormBankData = () => {
  const [value, setValue] = useState({});
  const formActive = useSelector((state) => state.forms.bankData);
  const dispatch = useDispatch();
  //const id = useSelector((state) => state.forms);
  //console.log(id);
  const {
    register,
    handleSubmit,

    //watch,
    reset,
    //formState: { errors },
  } = useForm({
    defaultValues: {
      iban: "",
      bic: "",
      bankName: "",
    },
  });
  const closeForm = () => dispatch(bankData());
  const onSubmit = (data) => {
    closeForm();
    dispatch(contact());
    setValue(data);
    reset();
    console.log(value, "value");
  };
  if (!formActive) return null;

  return (
    <div
      className='form__conteiner'
      onClick={(e) => {
        if (e.target.className === "form__conteiner") {
          closeForm();
          reset();
        }
      }}>
      <form className='form__content' onSubmit={handleSubmit(onSubmit)}>
        <h2 className='form__title'>Bank Data</h2>

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
            className='button__transparent'
            onClick={closeForm}
          />
          <Button
            text='Previous'
            className='button__transparent'
            onClick={() => {
              closeForm();
              dispatch(invoiseAddress());
            }}
          />
          <Button text='Next' className='button__green' type='submit' />
        </div>
      </form>
    </div>
  );
};
export default FormBankData;
