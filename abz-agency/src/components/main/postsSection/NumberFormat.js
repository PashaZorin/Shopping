import React from "react";
import NumberFormat from "react-number-format";
import { TextField } from "@mui/material";
import { useField } from "formik";

const NumberInput = (props) => {
  const [field, meta] = useField(props);
  const { error, touched } = meta;
  return (
    <NumberFormat
      //value={value}
      //name={name}
      //  mask={}
      customInput={TextField}
      {...props}
      {...field}
      error={touched && !!error}
      format="+38##########"
      type="text"
      //thousandSeparator={thousandSeparator ? " " : null}
      //onValueChange={({ value: v }) =>
      //  onChange({ target: { name, value: v } })
      //}
    />
  );
};

export default NumberInput;
