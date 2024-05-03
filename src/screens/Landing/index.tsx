import { useSelector } from "react-redux";
import { Landing } from "../../components/Landing";

const LandingPage = () => {
  const darkMode = useSelector((reducer) => reducer);
  console.log(darkMode);

  return <Landing />;
};

export { LandingPage };
