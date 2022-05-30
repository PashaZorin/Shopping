import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import Button from "../buttons/Button";
//import { FormInput } from "./FormInput";
import "./form.scss";
import { invoiseAddress, bankData } from "../../store/redusers/formsSlise";
import { setDataWithInvoise } from "../../store/redusers/dataSlise";
import { v4 as uuidv4 } from "uuid";

const FormIvoiceAddress = () => {
  const [value, setValue] = useState({});
  const formIsActive = useSelector((state) => state.forms.invoiseAddress);
  const dispatch = useDispatch();

  const closeForm = () => dispatch(invoiseAddress());

  const {
    register,
    handleSubmit,

    watch,
    reset,
    //formState: { errors },
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
  console.log(value, "value");
  const onSubmit = (value) => {
    dispatch(
      setDataWithInvoise({
        data: value,
      })
    );
    console.log(value, "valueOnSubmit");
    closeForm();
    dispatch(bankData(value.id));
    //setValue(data);
    reset();
  };
  const inputEl = useRef(null);

  //useEffect(() => {
  //  if (formIsActive) {
  //    console.log(inputEl, "input");
  //    inputEl.current.focus();
  //  }
  //}, [formIsActive]);
  useEffect(() => {
    const subscription = watch((value, { name, type }) =>
      setValue({ ...value, id: uuidv4() })
    );
  }, [watch]);

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
            ref={inputEl}
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
          <Button text='Cancel' className='button__green' onClick={closeForm} />
          <Button text='Next' className='button__transparent' type={"submit"} />
        </div>
      </form>
    </div>
  );
};
export default FormIvoiceAddress;
