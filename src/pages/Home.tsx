import { Link, Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <>
        <h1>Hello World!</h1>
        <div>
            <Link to="/">Home</Link>
        </div>
        <div>
            <Link to="/favorites">Favorites</Link>
        </div>
        <Outlet />
    </>
  )
}

export default Home