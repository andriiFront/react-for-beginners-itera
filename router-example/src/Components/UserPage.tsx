import { useParams, Outlet, Link } from "react-router-dom"

export const UserPage = () => {
  const { userName } = useParams();

  return (
    <>
      <h1>Hello user { userName }</h1>
      <div>
         <Outlet />
      </div>
      <div>
         <Link to="">Default view</Link>
      </div>
      <div>
         <Link to="posts">Posts</Link>
      </div>
    </>
  )
}
