import React from "react";
import { useEffect } from "react";
import { getAllFeedings } from "./feedingSlice";
import { useDispatch, useSelector } from "react-redux";
import { FeedingListItem, FeedingListWrapper } from "../styled/Feeding";
import { Container } from "../styled/Lib";

const FeedingList = () => {
  const dispatch = useDispatch();
  const feedings = useSelector(state => state.feeding.feedings.data);

  useEffect(() => {
    const fetch = async () => {
      dispatch(getAllFeedings());
    };
    fetch();
  }, [dispatch]);

  return (
    <Container>
      <FeedingListWrapper>
        <h2>All Feedings</h2>
        {feedings?.length > 0 ? (
          feedings?.map(feeding => (
            <li key={feeding.id}>
              <FeedingListItem to={`/view/${feeding.id}`}>
                <span>{feeding.id}</span>
                <span>{feeding.location}</span>
                <span>{feeding.time}</span>
              </FeedingListItem>
            </li>
          ))
        ) : (
          <li>No Feedings Submitted</li>
        )}
      </FeedingListWrapper>
    </Container>
  );
};

export default FeedingList;
