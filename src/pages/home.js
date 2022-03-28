import { Styles } from "./styles"
import Button from '@mui/material/Button';
import ReactNbsp from 'react-nbsp'
import Carosuel from "../component/Carosu";
import CarosuNFT from "../component/CarosuNFT";
import {
  faYoutube,
  faDiscord,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'


function Home() {
  return (
    <Styles>
        <div className="favourite-part">
            <div className="container">
              <div className="signup">
                  <p className="title">Get a digital piece of your favorite player</p>
                  <p className="general">Buy the player coin to unlock access to exclusive content</p>
                  {/* <input type="button" className="btn-signup">SIGN UP</input> */}
                  <Button variant="outlined" className="btn-signup">SIGN UP</Button>
              </div>
              <div className="slider">
                  <p className="launch-text">New Launches</p>
                  <Carosuel/>
                  <p className="general-elit">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              </div>
              <p className="viewall-text"><a>VIEW ALL </a></p>
            </div>
        </div>
        <div className="latestNFT-part">
            <div className="container a111">
                <p className="launch-text">Latest created NFT’s</p>
                <CarosuNFT/>
                <p className="general-elit">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>
            <p className="viewall-text"><a>VIEW ALL </a></p>
        </div>
        <div className="faq">
            <div className="container">
                <div className="faq-part">
                <div>
                    <img src="assets/images/question.png" alt="" className="m-auto" width="40"/>
                    <p className="title" style={{marginTop:"16px"}}>What is meCarreira?</p>
                    <p className="general">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi condimentum platea enim sit id.</p>
                    <p className="general">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus massa faucibus fringilla et at lectus vitae purus. Mauris felis ma</p>
                </div>
                <div  className="faqs">
                    <p className="title">FAQ’s</p>
                    <div className="main-aqs">
                        <div className="d-flex bottomborder">
                            <p className="middle">Lorem ipsum dolor sit amet?</p>
                            <p className="symbol">-</p>
                        </div>
                        <div className="d-flex leftborder">
                            <p className="middle" style={{padding:'0px 15px', lineHeight:'28px',marginBottom:'1px'}}><ReactNbsp/>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi condimentum platea enim sit id.</p>
                        </div>
                        <div className="d-flex bottomborder" style={{marginTop:"15px"}}>
                            <p className="middle">Lorem ipsum dolor sit amet?</p>
                            <p className="symbol">+</p>
                        </div>
                        <div className="d-flex bottomborder">
                            <p className="middle">Lorem ipsum dolor sit amet?</p>
                            <p className="symbol">+</p>
                        </div>
                        <div className="d-flex bottomborder">
                            <p className="middle">Lorem ipsum dolor sit amet?</p>
                            <p className="symbol">+</p>
                        </div>
                        <div className="d-flex bottomborder">
                            <p className="middle">orem ipsum dolor sit amet?</p>
                            <p className="symbol">+</p>
                        </div>
                    </div>
                </div>
                <div>
                    <p className="title">How to buy</p>
                    <p className="general">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi condimentum platea enim sit id.</p>
                    <iframe
       style={{
                marginBottom:"26px",
             width: "200",
             height: "300"
             }}
        src={'https://www.youtube.com/embed/hEnr6Ewpu_U?'}
        frameBorder="0"
    />
                   
                    <p className="general">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi condimentum platea enim sit id.</p>
                    <Button variant="outlined" className="btn-signup">REGISTER</Button>
                </div>
                </div>
            </div>
        </div>
        <div className="blog">
            <div className="container">
                <div className="blog-part"> 
            <div>
                <p className="title">Latest Blog posts</p>
                <p className="general">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus massa faucibus fringilla et at lectus vitae purus. Mauris felis mattis at nisi enim purus, ac blandit tristique.</p>
                <p className="border-bottom"></p>
            </div>
            <div>
                <p className="title">Stay in the loop</p>
                <p className="general">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus massa faucibus fringilla et at lectus vitae purus. Mauris felis mattis at nisi enim purus, ac blandit tristique.</p>
                <div className="email-part">
                    <input className="email-address" placeholder="Your email address"></input>
                </div>
                <Button variant="outlined" className="btn-signup">SIGN UP</Button>
                <p className="border-bottom"></p>
            </div>
            <div>
                <p className="title">Join the community</p>
                <div className="social row">
                    <FontAwesomeIcon icon={faTwitter} size="2x" className="social-icons"/>
                    <FontAwesomeIcon icon={faDiscord} size="2x" className="social-icons"/>
                    <FontAwesomeIcon icon={faInstagram} size="2x" className="social-icons"/>
                    <FontAwesomeIcon icon={faYoutube} size="2x" className="social-icons"/>
                </div>
                <p className="border-bottom"></p>
            </div>
            <div>
                <p className="title">meCarreira.com</p>
                <p className="general">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nisi condimentum platea enim sit id.</p>
                <p className="middle">About Us</p>
                <p className="middle">Team</p>
                <p className="middle">Terms & Conditions</p>
                <p className="middle">Privacy</p>
                <p className="middle">Careers</p>
                <p className="border-bottom"></p>
                <p className="general">© 2022 meCarreira.com</p>
            </div>
                </div>
            </div>
        </div>
    </Styles>
)
}
export default Home;