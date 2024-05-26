import { Link } from "react-router-dom";
import {HiOutlineArrowNarrowRight} from 'react-icons/hi';


const About = () => {
  return (
    <section className="about" id="about">
        <div className="container">
            <div className="banner">
                <div className="top">
                    <h1 className="heading">ABOUT US</h1>
                    <p>The only thing we are srious about is FOOD.</p>
                </div>
                <p className="mid">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, praesentium? Ullam quisquam est magni error dolorum doloremque, soluta incidunt perferendis debitis at modi repellat fugit sequi quis labore quaerat praesentium a ad? Dignissimos vero, velit, explicabo asperiores totam omnis libero ad autem illum aliquid ipsam? Eum dicta ratione nemo reiciendis.</p>
                <Link to={"/"}  >Explore Menu <span><HiOutlineArrowNarrowRight/></span></Link>
            </div>
            <div className="banner">
                <img src="/about.png" alt="about" />
            </div>
        </div>
    </section>
  )
}

export default About