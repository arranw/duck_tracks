import React, { useEffect } from "react";
import { Feeding } from "./ViewFeeding";
import { useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getFeeding } from "./feedingSlice";
import { LinkButton } from "../styled/Buttons";
import { Container } from "../styled/Lib";

const ThankYou = () => {
  const match = useRouteMatch();
  const dispatch = useDispatch();
  const feeding = useSelector(state => state.feeding.feeding);
  const { data, loading } = feeding;

  useEffect(() => {
    const fetch = async () => {
      dispatch(getFeeding(match.params.id));
    };
    fetch();
  }, [dispatch, match.params.id]);

  return (
    <Container>
      <h2>Thank you for your submission!</h2>
      <Feeding data={data} loading={loading} />
      <div>
        <p>Do you have another feeding to add?</p>
        <LinkButton to="/submit">Contribute</LinkButton>
      </div>
    </Container>
  );
};

export default ThankYou;
