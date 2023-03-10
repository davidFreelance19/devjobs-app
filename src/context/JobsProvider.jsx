import { useState, createContext, useEffect } from "react";
const JobsContext = createContext();

const JobsProvider = ({ children }) => {
  const [trabajos, setTrabajos] = useState([]);
  const handleTransition = () => {
    const root = document.getElementById("body");
    const loader = document.getElementById("preloader");
    root?.removeChild(loader);
  };
  const url = import.meta.env.VITE_DB;
  useEffect(() => {
    const consulta = async () => {
      const datos = await fetch(`${url}/data.json`);
      const resultado = await datos.json();
      setTrabajos(resultado);
    };
    
    consulta();
    const preloader = document.getElementById("preloader");
    preloader?.addEventListener("transitionend", handleTransition);
    setTimeout(() => {
      preloader?.classList.remove("loading");
    }, 3000);
  }, []);
  return (
    <JobsContext.Provider value={{ trabajos }}>{children}</JobsContext.Provider>
  );
};
export { JobsProvider };
export default JobsContext;
