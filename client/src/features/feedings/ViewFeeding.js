import React, { useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { Container } from "../styled/Lib";
import { useDispatch, useSelector } from "react-redux";
import { getFeeding } from "./feedingSlice";
import { FeedingWrapper, FeedingItem } from "../styled/Feeding";
import { LinkButton } from "../styled/Buttons";

const ViewFeeding = () => {
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
      <h2>Feeding ID: {data?.id || "..."}</h2>
      <Feeding data={data} loading={loading} />
      <LinkButton to="/view">Back To List</LinkButton>
    </Container>
  );
};

export default ViewFeeding;

export const Feeding = ({ data, loading }) => {
  return (
    <FeedingWrapper>
      <FeedingItem>
        <h3>Time of Feeding</h3>
        <span>{data?.time || "..."}</span>
      </FeedingItem>
      <FeedingItem>
        <h3>Location of Feeding</h3>
        <span>{data?.location || "..."}</span>
      </FeedingItem>
      <FeedingItem>
        <h3>How many Ducks?</h3>
        <span>{data?.duck_quantity || "..."}</span>
      </FeedingItem>
      <FeedingItem>
        <h3>What Kind of Food?</h3>
        <span>{data?.food_type || "..."}</span>
      </FeedingItem>
      <FeedingItem>
        <h3>How much food? (g)</h3>
        <span>{data?.food_quantity || "..."}</span>
      </FeedingItem>
      Submission Time: <span>{data?.createdAt || "..."}</span>
    </FeedingWrapper>
  );
};
