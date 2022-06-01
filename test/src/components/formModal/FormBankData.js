import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import Button from "../buttons/Button";
import { useDispatch, useSelector } from "react-redux";
import "./form.scss";
import {
  bankData,
  contact,
  invoiseAddress,
} from "../../store/redusers/formsSlise";
import { addData, removeData } from "../../store/redusers/dataSlise";

const FormBankData = () => {
  const { bankDataIsActive, id } = useSelector((state) => state.forms);

  useEffect(() => {
    if (bankDataIsActive) {
      console.log(window.history, "window.history");
    }
  }, [bankDataIsActive]);
  const dispatch = useDispatch();

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      iban: "",
      bic: "",
      bankName: "",
    },
  });

  const closeForm = () => dispatch(bankData());

  const onSubmit = (data) => {
    closeForm();
    dispatch(
      addData({
        data,
        id,
      })
    );
    dispatch(contact(id));
    reset();
  };

  if (!bankDataIsActive) return null;

  return (
    <div
      className='form__conteiner'
      onClick={(e) => {
        if (e.target.className === "form__conteiner") {
          closeForm();
          dispatch(removeData(id));
          reset();
        }
      }}>
      <form className='form__content' onSubmit={handleSubmit(onSubmit)}>
        <h2 className='form__title'>Bank Data</h2>

        <label className='form__item-conteiner'>
          <span>IBAN &#9733;</span>
          <input
            autoFocus='iban'
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
            onClick={() => {
              closeForm();
              dispatch(removeData(id));
            }}
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
