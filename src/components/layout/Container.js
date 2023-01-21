import BootstrapContainer from "react-bootstrap/Container";

const style = {
  width: "95%",
  margin: "auto",
  backgroundColor: "white",
  borderColor: "rgba(0, 0, 0, 0.12)",
  borderWidth: "1px",
  borderStyle: "solid",
  padding: "16px 10px",
  textAlign: "center",
};

const Container = ({ children }) => (
  <BootstrapContainer style={style}>{children} </BootstrapContainer>
);

export default Container;
