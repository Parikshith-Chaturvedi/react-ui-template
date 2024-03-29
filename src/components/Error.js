import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
  const err = useRouteError();
  console.log(err);
  return <>Oops Error!</>;
};

export default ErrorComponent;
