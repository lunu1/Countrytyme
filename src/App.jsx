import "./app.scss";
import Cursor from "./components/cursor/Cursor";
import { Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";
import Navbar from "./components/navbar/Navbar";
import Map from "./components/map/Map";
import NavbarHome from "./components/navbar/NavbarHome";

const Contact = React.lazy(()=> import("./components/contact/Contact"));
const Technologies =  React.lazy(()=> import("./components/technologies/Technologies"));
const Services =  React.lazy(()=> import("./components/servic/Services"));
const PhotoCount =  React.lazy(()=> import("./components/PhotoWithCount/PhotoCount"));
const CardSlider =  React.lazy(()=> import("./components/cardslick/CardSlick"));
const Network =  React.lazy(()=> import("./components/network/Network"));
const Footer =  React.lazy(()=> import("./components/Footer/Footer"));
const AboutDetails = React.lazy(() => import('./components/technologies/AboutDetails'));
const Whoweare = React.lazy(() => import('./components/technologies/Whoweare'));
const History = React.lazy(() => import('./components/technologies/History'));
const Safety = React.lazy(() => import('./components/technologies/Safetyandsecurity'));
const AboutNetwork = React.lazy(() => import('./components/technologies/Network'));
const Operations = React.lazy(() => import('./components/technologies/Operations'));
const Fleet = React.lazy(() => import('./components/technologies/Fleet'));
const Solutions = React.lazy(() => import('./components/solutions/Solutions'));
const Solutions1 = React.lazy(() => import('./components/solutions/Solutions1'));
const Solutions2 = React.lazy(() => import('./components/solutions/Solutions2'));
const Solutions3 = React.lazy(() => import('./components/solutions/Solutions3'));
const Solutions4 = React.lazy(() => import('./components/solutions/Solutions4'));
const Medical = React.lazy(() => import('./components/servic/Service1'));
const Manufacture = React.lazy(() => import('./components/servic/Service2'));
const Retail = React.lazy(() => import('./components/servic/Service3'));
const Techservice = React.lazy(() => import('./components/servic/Service4'));
const Hero  = React.lazy(() => import('./components/hero/Hero'));



const App = () => {
  return (
   <>
    <div>
    <Suspense fallback={<div className="lds-wrapper">Loading....</div>}>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Cursor/>
              <section id="Homepage">
                <Hero />
              </section>
              <section id="About">
                <Technologies />
              </section>
              <section id="services">
                <Services />
              </section>
              <section id='solutions'>
                 <Solutions/>
              </section>
              <section id="ServicesCount">
                <PhotoCount />
              </section>

              <section id="network">
                <CardSlider />
                <Network />
              </section>
              <section id='Contact'>
              <Contact />
              <Footer />  
              
              </section>
       
            </div>
          }
        />
        
      <Route path="/AboutDetails" element={<AboutDetails />}>
      <Route index element={<Whoweare />} />        <Route path="history" element={<History />}  />
        <Route path="safety" element={<Safety />}  />
        <Route path="network" element={<AboutNetwork />}  />
        <Route path="operations" element={<Operations />}  />
        <Route path="fleet" element={<Fleet />}  />
      </Route>

      <Route path='/solutions' element={<Solutions/>} />
      <Route path='/fullload' element={<Solutions1/>}/>
      <Route path='/partLoad' element={<Solutions2/>}/>
      <Route path='/ecommerce' element={<Solutions3/>}/>
      <Route path='/hazmat' element={<Solutions4/>}/>

      <Route path="/Technologies" element={<Technologies />} />
      <Route path="/medical" element={<Medical/>}/>
      <Route path="/manufacture" element={<Manufacture/>}/>
      <Route path="/retail" element={<Retail/>} />
      <Route path="/Techservice" element={<Techservice/>}/>
      <Route path="/contact" element={<div>
        <NavbarHome/>
        <Contact/>
        <Map/>
      <Footer/>
      
      </div>}/>
      </Routes>
      </Suspense>

    </div>
      <div className="whatsapp-icon" >
  <a 
  aria-label="Chat on WhatsApp" 
  href="https://wa.me/9710501313715" 
  target="_blank" 
  rel="noopener noreferrer"
> 
  <img 
    alt="Chat on WhatsApp" 
    src="/Whatsapp.png" 
    style={{ width: "50px", height: "50px" }} 
  />
</a>

      </div>
   </>
  );
};

export default App;
