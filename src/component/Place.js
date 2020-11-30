import React, {useState,useEffect}  from 'react'; 
import Sidebar from './Sidebar';
import '../css/place.css';
import NavbarSmall from './NavbarSmall';
import Footer from './Footer';
import Scroll from './BackTopButton';
import place from '../images/place.jpeg';
import pl1 from '../images/place/pl1.jpeg';
import pl2 from '../images/place/pl2.jpeg';
import pl3 from '../images/place/pl3.jpeg';
import pl4 from '../images/place/pl4.jpeg';
import pl5 from '../images/place/pl5.jpeg';
import pl6 from '../images/place/pl6.jpeg';

export default function Place(){
    return(
        <div>
            <Sidebar/>
            <NavbarSmall/>
            <Scroll showBelow={250} />
            <div className="jumbotron jumbotron-fluid" 
            style={{
                height:'230px', 
                //marginTop:'45px', 
                background:' linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.7) 35%, rgba(0,0,0,0.1) 100%),url("https://remingtonsolar.com/wp-content/uploads/banner-background.jpg") right no-repeat', 
                marginBottom: '0', 
                color: 'white', 
                backgroundSize:' cover'}}> 
                <div className="container1" > 
                    <h2 className="display-4 banner-pl">
                    Place </h2> 
                    <hr className="line-pl"></hr><br/>
                </div> 
            </div><br/>
            <div className="background-pl">
            <div className="container"><br/>
            <div className="row row-cols-1 row-cols-md-3 body-pl">
                <div className="col mb-4">
                    <div className="card box-pl hovereffect">
                        <img src={pl1} className="card-img-top img-responsive" alt="Hampi"/>
                        <div class="overlay">
                            <h2>Hampi, India</h2>
                            <p>
                                <span>Sree Virupaksha Temple<br/> Canon 450D</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-pl hovereffect">
                        <img src={pl2} className="card-img-top" alt="Hampi INR50"/>
                        <div class="overlay">
                            <h2>Hampi, India</h2>
                            <p>
                                <span>Stone Chariot, Vitthala Temple<br/>Canon 450D</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-pl hovereffect">
                    <img src={place} className="card-img-top" alt="Hampi"/>
                    <div class="overlay">
                        <h2>Hampi, India</h2>
                        <p>
                            <span>Sree Virupaksha Temple<br/>Canon 450D</span>
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-pl pl3 hovereffect">
                    <img src={pl3} className="card-img-top" alt="Pondicherry"/>
                    <div class="overlay">
                        <h2>Pondicherry, India</h2>
                        <p>
                            <span>Rock Beach<br/>Canon 650D</span>
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-pl hovereffect">
                    <img src={pl5} className="card-img-top" alt="Hampi"/>
                    <div class="overlay">
                        <h2>Hampi, India</h2>
                        <p>
                            <span>Hemakuta Hill<br/>Canon 450D</span>
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-pl pl4 hovereffect">
                    <img src={pl4} className="card-img-top" alt="Pondicherry"/>
                    <div class="overlay">
                        <h2>Pondicherry, India</h2>
                        <p>
                            <span>Rock Beach<br/>Canon 650D</span>
                        </p>
                    </div>
                    </div>
                </div>
                <div className="col mb-4">
                    <div className="card box-pl pl6 hovereffect">
                    <img src={pl6} className="card-img-top" alt="Mirissa"/>
                    <div class="overlay">
                        <h2>Mirissa, SriLanka</h2>
                        <p>
                            <span>Indian Ocean<br/>Canon 450D</span>
                        </p>
                    </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
            <hr style={{width:'75%'}}></hr>
            <Footer/>
        </div>
    );
}