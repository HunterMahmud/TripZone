import { FC } from "react";
import Overview from "./Overview/Overview";
// import LoadingSpinner from "./LoadingSpinner"; // Ensure the correct path for LoadingSpinner
// import useRole from "../../Hook/useRole"; // Ensure the correct path for useRole

const Statistics: FC = () => {
  // const [role, isLoading]: [string | undefined, boolean] = useRole(); 

  // if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <Overview />
    </>
  );
};

export default Statistics;
