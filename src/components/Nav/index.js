import { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../contexts/UserContext'

const Nav = () => {
    const user = useContext(UserContext)
    // console.log('nav', user)

    // Below we will use Link from react router to replace all of our anchor tags. We replace the href from <a> to "to"
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Pokepedia</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="pokemon/list">Pokemon List</Link>
                        </li>
                        {
                            !user
                                ?
                                <li className="nav-item">
                                    <Link className="nav-link" to="login">Login</Link>
                                </li>
                                :
                                <li className="nav-item">
                                    <Link className="nav-link" to="favorites">Favorites</Link>
                                </li>
                        }


                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
