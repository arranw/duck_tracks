import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "../styled/Lib";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import { Button } from "../styled/Buttons";
import { StyledForm, StyledField, StyledNumberFormat, FormError, StyledSelect } from "../styled/Forms";
import { addFeeding } from "./feedingSlice";
import { useHistory } from "react-router-dom";

const validFoodTypes = ["Bread", "Seed", "Insect", "Fish", "Other"];

const AddFeeding = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const loading = useSelector(state => state.feeding.feeding.adding);

  return (
    <Container>
      <h1>Submit Duck Feeding</h1>
      <Formik
        initialValues={{
          time: "16:33",
          location: "Sf Bay",
          duck_quantity: "",
          food_type: "Bread",
          food_quantity: 200
        }}
        validationSchema={Yup.object().shape({
          time: Yup.string()
            .matches(/([01]\d|2[0-3]):?[0-5]\d/, "Please Use Military Time Format (HH:mm)")
            .required("Required"),
          location: Yup.string().required("Required"),
          duck_quantity: Yup.number().min(1, "Minimum is 1").required("Required"),
          food_type: Yup.mixed().oneOf(validFoodTypes, `Must be one of ${validFoodTypes}`).required("Required"),
          food_quantity: Yup.number().min(1, "Minimum is 1").required("Required")
        })}
        onSubmit={async (values, { resetForm }) => {
          const res = await dispatch(addFeeding(values));
          const submittedId = res.payload.id;

          history.push(`/thankyou/${submittedId}`);
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

            <label htmlFor="duck_quantity">
              How many Ducks?
              {errors.duck_quantity && touched.duck_quantity && <FormError>{errors.duck_quantity}</FormError>}
            </label>
            <StyledField id="duck_quantity" name="duck_quantity" type="number" />

            <label htmlFor="food_type">
              What Kind of Food?
              {errors.food_type && touched.food_type && <FormError>{errors.food_type}</FormError>}
            </label>
            <Field id="food_type" name="food_type">
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

            <label htmlFor="food_quantity">
              How much food? (g)
              {errors.food_quantity && touched.food_quantity && <FormError>{errors.food_quantity}</FormError>}
            </label>
            <StyledField id="food_quantity" name="food_quantity" type="number" />

            <Button type="submit">{loading ? "..." : "Submit"}</Button>
          </StyledForm>
        )}
      </Formik>
    </Container>
  );
};

export default AddFeeding;
