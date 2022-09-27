import { Container } from "@mui/system";
import { RingLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const PageLoading = () => {
  return (
    <Container maxWidth={"lg"}>
      <RingLoader
        color="green"
        loading={true}
        cssOverride={override}
        size="200"
      />
    </Container>
  );
};
export default PageLoading;
