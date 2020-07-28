import React from "react";
import { Container, BlockQuote } from "../styled/Lib";
import { LinkButton, Button } from "../styled/Buttons";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Container>
      <div>
        <h1>Welcome to Duck Tracks!</h1>

        <p>
          This year, a not-for-profit group of scientists assembled to solve the burning question that we've all been
          asking ourselves.
        </p>

        <BlockQuote>What the heck are ducks eating?</BlockQuote>

        <p>
          As you can image, there's a lot of work ahead, so we're reaching out to the public to gather data. If you're
          passionate about ducks and data, then we need your help!
        </p>
      </div>

      <LinkButton to="/submit">Contribute</LinkButton>
    </Container>
  );
};

export default Landing;
