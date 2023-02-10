import useJobs from "../hooks/useJobs"

const Index = () => {
  const {trabajos} = useJobs()
  console.log(trabajos)
  return (
    <div>Index</div>
  )
}

export default Index