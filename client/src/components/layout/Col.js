import React from "react";
import BootstrapCol from "react-bootstrap/Col";

const style = {
  marginRight: "2%",
  marginLeft: "2%",
  minWidth: "10%"
};

const Col = (props) => {
  const { xs, lg, children, ...rest } = props;
  return (
    <BootstrapCol style={style} {...rest} xs={xs} lg={lg}>
      {children}
    </BootstrapCol>
  );
};

export default Col;
