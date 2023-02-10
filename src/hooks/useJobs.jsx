import { useContext } from "react";
import JobsContext from "../context/JobsProvider";

const useJobs = () => {
  return useContext(JobsContext);
};

export default useJobs;
