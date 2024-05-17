import { React, CSSProperties } from "react";
import ClipLoader from "react-spinners/ClipLoader";
const Loader = () => {
  const override = {
    display: "block",
    margin: "auto",
  };

  return (
    <div>
      <ClipLoader color="#4bb6b9" size={15} cssOverride={override} />
    </div>
  );
};

export default Loader;
