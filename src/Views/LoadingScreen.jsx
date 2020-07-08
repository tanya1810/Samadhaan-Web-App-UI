import React from "react";
import PulseLoader from "react-spinners/PulseLoader";

const override = `
  display: block;
  margin: 0 auto;
  border-color: blue;
`;

const LoadingScreen = (props) => {
  return (
    <div style={{justifyContent:"center", alignItems:"center"}}>
      <PulseLoader
        css={override}
        size={30}
        color={"#123abc"}
        loading= {true}
      />
    </div>
  );
};

export default LoadingScreen;