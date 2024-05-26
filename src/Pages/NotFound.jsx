import { Link } from "react-router-dom";
import {HiOutlineArrowNarrowRight} from 'react-icons/hi';


const NotFound = () => {
  return (
    <>
        <section className="notFound" >
          <div className="container">
            <img src="/notFound.svg" alt="notFound" />
            <h1>Looks Like You Are Lost</h1>
            <p>We can't see you find you the page you are looking for</p>
            <Link to={"/"}>Back to Home <span><HiOutlineArrowNarrowRight/></span></Link>
          </div>
        </section>
    </>
  )
}

export default NotFound