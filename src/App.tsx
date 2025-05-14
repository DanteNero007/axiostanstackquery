import './App.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { MyComponent } from './components/MyComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'

function App() {
 // const [posts, setPosts ] = useState([]);
 const queryClient = new QueryClient()
  
  return (
  
<QueryClientProvider client={queryClient}>
<BrowserRouter>
    <Routes>
        <Route path={'/'} element={<Home/>} />
        <Route  path={'/component'} element={<MyComponent/>} />
    </Routes>    
</BrowserRouter>
      </QueryClientProvider>
  )
}

export default App
