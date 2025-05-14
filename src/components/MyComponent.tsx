import { useQuery } from "@tanstack/react-query";
import api from "../api";
import { Link } from "react-router-dom";

const fetchPosts =  async () => {
    const response = await
      api.get('/posts');
    return response.data
  } 
    export function MyComponent(){
      const { data, error, isLoading }= useQuery({
       queryKey:['posts'],
       queryFn: fetchPosts, 
      });
      if(isLoading){
        return <div>carregando...</div>;
      }
      if(error){
        return <div>Erro:{error.message} </div>
      }
      return(
      <div>
        <ul>
        { data.map(post =>(
          <li key={post.id} >
            {post.title}
          </li>
        )) }
        </ul>
        <h1>ola mundo</h1>
        <li>
            <Link to={'/'} >raiz</Link>
        </li>

      </div>
      )
    }
  