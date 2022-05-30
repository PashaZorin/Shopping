import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import Button from "../buttons/Button";
//import { FormInput } from "./FormInput";
import "./form.scss";
import { contact } from "../../store/redusers/formsSlise";

const FormContact = () => {
  const [value, setValue] = useState({});
  const formIsActive = useSelector((state) => state.forms.contact);
  const dispatch = useDispatch();
  const closeForm = () => dispatch(contact());

  const {
    register,
    handleSubmit,

    //watch,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      company: "",
      name: "",
      additional: "",
      street: "",
      postalCode: "",
      country: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data, "data");
    setValue(data);
    reset();
  };
  //console.log(value, "value");
  if (!formIsActive) return null;
  return (
    <div
      className='form__conteiner'
      onClick={(e) => {
        if (e.target.className === "form__conteiner") {
          closeForm();
        }
      }}>
      <form className='form__content' onSubmit={handleSubmit(onSubmit)}>
        <h2 className='form__title'>Invoice Address</h2>

        <label className='form__item-conteiner'>
          <span>Company &#9733;</span>
          <input
            className='form__item'
            //type='text'
            {...register("company", { required: true })}
          />
          {/*{errors.company?.type === "required" && "First name is required"}*/}
        </label>
        <label className='form__item-conteiner'>
          <span>Name &#9733;</span>
          <input
            className='form__item'
            {...register("name", { required: true })}
          />
        </label>
        <label className='form__item-conteiner'>
          <span>additional</span>
          <input className='form__item' {...register("additional")} />
        </label>
        <label className='form__item-conteiner'>
          <span>street</span>
          <input className='form__item' {...register("street")} />
        </label>
        <label className='form__item-conteiner'>
          <span>Postal Code</span>
          <input className='form__item' {...register("postalCode")} />
        </label>
        <label className='form__item-conteiner'>
          <span> Country </span>
          <select
            {...register("country")}
            className='form__item'
            style={{ width: "242px" }}>
            <option value='Ukraine'>Ukraine</option>
            <option value='Poland'>Poland</option>
            <option value='Germany'>Germany</option>
          </select>
        </label>

        <div className='form__btns'>
          <Button
            text='Cancel'
            type={"submit"}
            className='button__green'
            onClick={closeForm}
          />
          <Button text='Next' className='button__transparent' />
        </div>
      </form>
    </div>
  );
};
export default FormContact;
