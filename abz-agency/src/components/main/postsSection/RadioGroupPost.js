import React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const RadioGroupPost = () => {
  return (
    <section className="post__input-radio-conteiner">
      <FormControl
        sx={{
          gap: 0.5,
        }}
      >
        <FormLabel id="demo-radio-buttons-group-label">
          Select your position
        </FormLabel>
        <RadioGroup
          aria-labelledby="demo-radio-buttons-group-label"
          name="position"
        >
          <FormControlLabel
            value="frontendDeveloper"
            control={<Radio />}
            label="Frontend developer"
            className="post__input-radio-item"
            name="position"
            sx={{
              paddingBottom: 0,
            }}
          />
          <FormControlLabel
            value="backendDeveloper"
            control={<Radio />}
            label="Backend developer"
            name="position"
            className="post__input-radio-item"
          />
          <FormControlLabel
            value="designer"
            control={<Radio />}
            name="position"
            label="Designer"
            className="post__input-radio-item"
          />
          <FormControlLabel
            value="oa"
            control={<Radio />}
            name="position"
            label="QA"
            className="post__input-radio-item"
          />
        </RadioGroup>
      </FormControl>
    </section>
  );
};
export default RadioGroupPost;
