import styled from "styled-components";
import { Link } from "react-router-dom";

export const FeedingItem = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  border-bottom: 2px solid var(--input-border-color);
  margin-bottom: 2rem;
  h3 {
  }

  span {
    font-weight: normal;
  }
`;

export const FeedingListItem = styled(Link)`
  display: flex;
  justify-content: space-between;
  background: var(--primary-color);
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 1rem;
`;

export const FeedingListWrapper = styled.ul`
  list-style: none;

  max-height: 600px;
  overflow-y: auto;
  h2 {
    position: sticky;
    background: var(--light-color);
    z-index: 2;
    top: 0;
    margin-bottom: 3rem;
  }
`;
