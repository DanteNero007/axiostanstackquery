import { useQuery } from "@tanstack/react-query";
import api from "../api";
import { Link } from "react-router-dom";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

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
        { data.map((post: { id: Key | null | undefined; title: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) =>(
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
  