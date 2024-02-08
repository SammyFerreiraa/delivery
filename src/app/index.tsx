import Home from './home/Home.view'
import { useHomeModel } from './home/Home.model'

export default function App() {
  const methodHome = useHomeModel()
  return <Home {...methodHome} /> 
}