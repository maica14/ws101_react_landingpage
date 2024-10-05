import './Navbar.css'

function Navbar(){
    return (
        <div className='Navbar'>
            <div class="container">
                <nav>
                    <ul>
                        <li><a href="#HOME">HOME</a></li>
                        <li><a href="#ABOUT">ABOUT</a></li>
                        <li><a href="#EXPLORE">EXPLORE</a></li>
                        <li><a href="#MORE">MORE</a></li>

                    </ul>
                </nav>
            </div>

            <div class="h_container" id="HOME">
            </div>
            
            <div class="action">
                    <a  class="button" href="#ABOUT">NEXT</a>
                </div>
        </div>
    );
};

export default Navbar;