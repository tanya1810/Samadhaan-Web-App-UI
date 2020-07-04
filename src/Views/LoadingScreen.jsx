import React from "react";
import BounceLoader from "react-spinners/BounceLoader";

const override = `
  display: block;
  margin: 0 auto;
  border-color: blue;
`;

const LoadingScreen = (props) => {
  return (
    <div>
      <BounceLoader
        css={override}
        size={150}
        color={"#123abc"}
        loading= {true}
      />
    </div>
  );
};

export default LoadingScreen;