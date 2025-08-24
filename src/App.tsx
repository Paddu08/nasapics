
import { useGetApodQuery } from './redux/slice'


const API_KEY = import.meta.env.VITE_NASA_API_KEY

export function Apod() {
  const { data, error, isLoading } = useGetApodQuery({ apiKey: API_KEY })

  if (isLoading) return <p>Loading...</p>
  if (error) return <p>Error fetching data</p>

  return (
    <div className='flex'>
      <h1>{data?.title}</h1>
      <p>{data?.date}</p>
      <img src={data?.url} alt={data?.title} style={{  }} />
      <p>{data?.explanation}</p>
    </div>
  )
}
