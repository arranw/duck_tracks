import React from "react";
import { useDispatch } from "react-redux";
import { Container } from "../styled/Lib";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { Button } from "../styled/Buttons";
import { StyledForm, StyledField, StyledNumberFormat, FormError, StyledSelect } from "../styled/Forms";
import { addFeeding } from "./feedingSlice";

const validFoodTypes = ["Bread", "Seed", "Insect", "Fish", "Other"];

const AddFeeding = () => {
  const dispatch = useDispatch();

  return (
    <Container>
      <h1>Submit Duck Feeding</h1>
      <Formik
        initialValues={{
          time: "16:33",
          location: "Sf Bay",
          duckQuantity: 5,
          foodType: "Bread",
          foodQuantity: 200
        }}
        validationSchema={Yup.object().shape({
          time: Yup.string()
            .matches(/([01]\d|2[0-3]):?[0-5]\d/, "Please Use Military Time Format (HH:mm)")
            .required("Required"),
          location: Yup.string().required("Required"),
          duckQuantity: Yup.number().min(1, "Minimum is 1").required("Required"),
          foodType: Yup.mixed().oneOf(validFoodTypes, `Must be one of ${validFoodTypes}`).required("Required"),
          foodQuantity: Yup.number().min(1, "Minimum is 1").required("Required")
        })}
        onSubmit={values => {
          dispatch(addFeeding(values));
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <StyledForm>
            <label htmlFor="time">
              Time of Feeding
              {errors.time && touched.time && <FormError>{errors.time}</FormError>}
            </label>
            <Field id="time" name="time">
              {({ field }) => <StyledNumberFormat {...field} format="##:##" placeholder="HH:mm" />}
            </Field>

            <label htmlFor="location">
              Location of Feeding
              {errors.location && touched.location && <FormError>{errors.location}</FormError>}
            </label>
            <StyledField id="location" name="location" />

            <label htmlFor="duckQuantity">
              How many Ducks?
              {errors.duckQuantity && touched.duckQuantity && <FormError>{errors.duckQuantity}</FormError>}
            </label>
            <StyledField id="duckQuantity" name="duckQuantity" type="number" />

            <label htmlFor="foodType">
              What Kind of Food?
              {errors.foodType && touched.foodType && <FormError>{errors.foodType}</FormError>}
            </label>
            <Field id="foodType" name="foodType">
              {({ field }) => (
                <StyledSelect {...field}>
                  <option hidden disabled value=""></option>
                  {validFoodTypes.map(food => (
                    <option key={food} value={food}>
                      {food}
                    </option>
                  ))}
                </StyledSelect>
              )}
            </Field>

            <label htmlFor="foodQuantity">
              How much food? (g)
              {errors.foodQuantity && touched.foodQuantity && <FormError>{errors.foodQuantity}</FormError>}
            </label>
            <StyledField id="foodQuantity" name="foodQuantity" type="number" />

            <Button type="submit">Submit</Button>
          </StyledForm>
        )}
      </Formik>
    </Container>
  );
};

export default AddFeeding;
