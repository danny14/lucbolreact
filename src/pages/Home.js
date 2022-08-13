import NavScroll from './../components/NavBar';
import HeroSection from './../components/HeroSection';
import AboutUs from './../components/AboutUs';
import OurServices from './../components/OurServices';
import OurTeam from './../components/OurTeam';
import Reviews from './../components/Reviews';
import Form from './../components/Form';

export default function Home(){
    return (
        <><div>
            <NavScroll /><HeroSection /><AboutUs /><OurServices /><OurTeam /><Reviews /><Form />
        </div><div>
                
            </div></>
      );
}