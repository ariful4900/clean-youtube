import { Audio } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
const DataLoading = () => {
  return (
    <Audio
      height="100"
      width="100"
      color="#4fa94d"
      ariaLabel="audio-loading"
      wrapperStyle={{}}
      wrapperClass="wrapper-class"
      visible={true}
    />
  );
};
export default DataLoading;
