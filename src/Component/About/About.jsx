import picImg from './pic1.png';
import './About.css';

function About(){
    return (
        <div>
            <div class="a_container" id="ABOUT">
                    <h1 class="webdev">WEB DEVELOPMENT</h1>
                <div class="definition">
                    <p>Web development is a complex process that involves creating, designing, and maintaining websites and web applications. 
                        <br/>It encompasses various tasks such as planning, designing, coding, testing, and deployment. From understanding the client's 
                        <br/>needs to ensuring a seamless user experience, web developers play a crucial role in bringing digital ideas to life. They 
                        <br/>utilize a combination of technical skills, creativity, and problem-solving abilities to build functional, visually appealing, 
                        <br/>and user-friendly websites that meet the evolving demands of the digital age.</p>
                    <img src={picImg} class="img" alt="PIC"/>
                </div>
                
            </div>

            <div class="action2">
                    <a href="#EXPLORE" class="button2">EXPLORE</a>
            </div>
        </div>
    );
};

export default About;