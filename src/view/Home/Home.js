import './Home.css'
import { Link } from 'react-router-dom';

function Home(){
    return(
        <>
            <div className='background-img'>
                <Link to={'/login'} style={{textDecoration:'none'}}>
            <button className='btn'>
                Login
            </button>
            </Link>
            </div>
        </>
    )
}

export default Home;