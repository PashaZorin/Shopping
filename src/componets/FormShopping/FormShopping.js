import React from "react";
import { Formik, Form } from "formik";
import * as yup from "yup";
import CustomInput from "./CustomInput";
import "./style.scss";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { toggleFormAC } from "../../store/actionsCreator/formAC";
import { toggleCartAC } from "../../store/actionsCreator/productAC";
import { toggleMessegeAC } from "../../store/actionsCreator/messegeAC";
import NumberFormat from "react-number-format";
import { toggleScrollAC } from "../../store/actionsCreator/scrollAC";

const FormShopping = ({ cards }) => {
  const { isInForm, id } = useSelector((state) => state.form);
  const dispatch = useDispatch();
  const chooses = cards.filter((el) => el.id === id);

  //const inputNumberRef = useRef()

  const initialValues = {
    name: "",
    surName: "",
    age: "",
    city: "",
    phone: "",
  };

  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .required("The field is required")
      .matches(/[A-Za-zА-Яа-я ]/, "only letters,"),
    surName: yup
      .string()
      .required("The field is required")
      .matches(/[A-Za-zА-Яа-я ]/, "only letters"),
    age: yup
      .number()
      .required("The field is required")
      .typeError("only numbers"),
    city: yup
      .string()
      .required("The field is required")
      .matches(/[A-Za-zА-Яа-я ]/, "only letters"),
    //phone : yup.number().required('The field is required'),
  });

  const onSubmit = (values, { resetForm }) => {
    dispatch(toggleCartAC(id));
    dispatch(toggleFormAC());
    toggleScrollAC();
    resetForm();
    dispatch(toggleMessegeAC());
    setTimeout(() => {
      dispatch(toggleMessegeAC());
    }, 1000);
    console.log(chooses, "chooses");
    console.log(values, "values");
  };

  if (!isInForm) {
    return null;
  }
  return (
    <div
      className="form__conteiner"
      onClick={(e) => {
        if (e.target.className === "form__conteiner") {
          dispatch(toggleFormAC());
          dispatch(toggleScrollAC());
        }
        //e.target.className === 'form__conteiner' ?  dispatch(toggleFormAC()) : null
      }}
    >
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="form__content">
          <h2 className="form__title"> Введите ваши данные для покупки </h2>
          <CustomInput
            name="name"
            type="text"
            placeholder="Name"
            className="form__item"
          />
          <CustomInput
            name="surName"
            type="text"
            placeholder="Surname"
            className="form__item"
          />
          <CustomInput
            name="age"
            type="text"
            placeholder="age"
            className="form__item"
          />
          <CustomInput
            name="city"
            type="text"
            placeholder="city"
            className="form__item"
          />
          {/*<CustomInput
						name='phone'
                        type='text'
						placeholder='phone'
						className='form__item'
					/>*/}
          <NumberFormat
            format="+38 (0##) ###-##-##"
            className="form__item"
            mask="#"
            allowEmptyFormatting
          />

          <div className="form__btns">
            <Button
              text="checkout"
              type={"submit"}
              className="form__btn"
              backgroundColor={"green"}
            />
            <Button
              text="Cansel"
              onClick={() => {
                dispatch(toggleFormAC());
                dispatch(toggleScrollAC());
              }}
              className="form__btn"
              backgroundColor={"red"}
            />
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default FormShopping;
