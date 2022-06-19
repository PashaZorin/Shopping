import React from "react";
import "./postSection.scss";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import PostInput from "./PostInput";
import Button from "../../Button";
import { Box } from "@mui/material";
import RadioGroupPost from "./RadioGroupPost";
const PostSection = () => {
  const initialValues = {
    yorName: "",
    email: "",
    phone: "",
    position: "",
    filePhoto: "",
  };

  const onSubmit = (value, { resetForm }) => {
    console.log(value, "value");

    resetForm();
  };

  const validationSchema = Yup.object().shape({
    yorName: Yup.string()
      .required("The field is required")
      .matches(/[A-Za-zА-Яа-я]/, "only letters,"),
    email: Yup.string("not correct")
      .email("not correct")
      //.min(2)
      //.max(100)
      .required("This field is requried"),

    phone: Yup.number()
      .typeError("That doesn't look like a phone number")
      .positive("A phone number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(10)
      .required("The field is required"),
    position: Yup.string().required(""),
    filePhoto: Yup.string().required(""),
  });

  return (
    <section className="post">
      <h2 className="title">Working with POST request</h2>
      <Formik
        className="post__section"
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        initialValues={initialValues}
      >
        {({ isValid, dirty, error, touched }) => {
          //console.log(error, "error");
          return (
            <Form className="post__form inner-container">
              <PostInput
                type="text"
                name="yorName"
                //error
                //error={isValid && dirty}
                //as={TextField}
                fullWidth
                label="Your name"
                className="post-input"
              />
              <Box height={49} />
              <PostInput
                type="email"
                name="email"
                fullWidth
                label="Email"
                className="post-input"
              />
              <Box height={47} />
              <PostInput
                type="phone"
                name="phone"
                //as={TextField}
                fullWidth
                label="Phone"
                className="post-input"
                helperText="+38(###)###-##-##"
              />
              <Box height={20} />
              <RadioGroupPost /> нет значение , форма не отправляется , отступы
              гавно\\
              <Box height={50} />
              <PostInput
                type="file"
                name="filePhoto"
                //as={TextField}
                fullWidth
                className="post-input"
              />
              <Box height={48} />
              <Button
                text="Sign up"
                type="submit"
                disabled={!isValid || !dirty}
              />
            </Form>
          );
        }}
      </Formik>
    </section>
  );
};
export default PostSection;
