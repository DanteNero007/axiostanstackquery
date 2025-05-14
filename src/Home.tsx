import { Link } from 'react-router-dom' 
import { Header } from './components/Header'
export default function Home(){
    return(
        <div>
        <Header/>
        <h1>ola mundo</h1>

        <ul>

        <li>
            <Link to={'/'} >raiz</Link>
        </li>

        <li>
            <Link to={'/component'} >Lista</Link>
        </li>
        </ul>
        </div>
    )
}