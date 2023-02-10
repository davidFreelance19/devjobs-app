import useJobs from "../hooks/useJobs";
import Trabajo from "../components/Trabajo";
const Index = () => {
  const { trabajos } = useJobs();
  return (
    <main>
      {trabajos.map(trabajo => (
        <Trabajo trabajo={trabajo} key={trabajo.id}/>
      ))}
    </main>
  );
};

export default Index;
