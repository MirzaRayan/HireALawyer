import React, {useState} from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Profile from "./components/Profile";
import { Routes, Route } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import LawyerRegistration from "./components/LawyerRegistration.js"
// import ProfileLawyers from "./components/ProfileLawyers";
import LegalNoticeLawyer from './components/LegalNoticeLawyer.js'
import "./App.css";
import CustomerRegistration from "./components/CustomerRegistration";
import Footer from "./components/Footer.js";
import HireForm from "./components/HireForm";
import Caseform from "./components/Caseform"
import Casedescription from "./components/Casedescription";
import Casestudy from "./components/Casestudy";
import Cases from "./components/Cases";
import LawyerLogin from "./components/LawyerLogin.js";
import CriminalMatterLawyer from "./components/CriminalMatterLawyer.js";
import DivorceLawyers from "./components/DivorceLawyers.js";
import FamilyMatterLawyers from "./components/FamilyMatterLawyers.js";
import MediationLawyers from "./components/MediationLawyers.js";
import CompanyRegLawyers from "./components/CompanyRegLawyers.js";
import TradeMarkLawyers from "./components/TradeMarkLawyers.js";
import TaxFilingLawyers from "./components/TaxFilingLawyers.js";
import RecoveryMatterLawyers from "./components/RecoveryMatterLawyers.js";
import ImmigrationLawyers from "./components/ImmigrationLawyers.js";
import ServiceMatterLawyers from "./components/ServiceMatterLawyers.js";
import CivilMatterLawyers from "./components/CivilMatterLawyers.js";
function App() {
  return (
    <>
    

    <Routes>
      <Route path="/" element={ <LoginForm />}/>

      <Route exact path="/home" element={<Home/>}/>
        
      <Route path="/about" element={ <About />}/>

      <Route path="/service" element={ <Services />}/>

      <Route path="/contact" element={ <Contact />}/>

      <Route path="/profile/:id" element={ <Profile />}/>
       
       
      <Route path="/register" element={ <customerRegistration />}/>

      <Route path="/lawyer" element={ <LawyerRegistration />}/>

      <Route path="/legalnoticelawyersprofiles" element={ <LegalNoticeLawyer />}/>

      <Route path="/criminalmatterlawyersprofiles" element= {<CriminalMatterLawyer/>} />

      <Route path="/divorcelawyersprofiles" element= {<DivorceLawyers/>} />

      <Route path="/familymatterlawyersprofiles" element= {<FamilyMatterLawyers/>} />

      <Route path="/mediationlawyersprofiles" element= {<MediationLawyers/>} />

      <Route path="/companyreglawyersprofiles" element= {<CompanyRegLawyers/>} />

      <Route path="/trademarklawyersprofiles" element= {<TradeMarkLawyers/>} />

      <Route path="/taxfilinglawyersprofiles" element= {<TaxFilingLawyers/>} />

      <Route path="/recoverymatterlawyersprofiles" element= {<RecoveryMatterLawyers/>} />

      <Route path="/immigrationlawyersprofiles" element= {<ImmigrationLawyers/>} />

      <Route path="/servicematterlawyersprofiles" element= {<ServiceMatterLawyers/>} />

      <Route path="/civilmatterlawyersprofiles" element= {<CivilMatterLawyers/>} />

      <Route path="/customer" element={ <CustomerRegistration/>}/>

      <Route path="/profile/:id/hire-form" element={<HireForm />} />

      <Route path="/casestudy" element={ <Casestudy />}/>

      <Route path="/cases" element={ <Cases />}/>

      <Route path="/customer" element={ <CustomerRegistration/>}/>
      
      <Route path="/caseform" element={ <Caseform/>}/>

      <Route path="/casedescription/:id" element={ <Casedescription/>}/>

      <Route path="/lawyerlogin" element={ <LawyerLogin/> } />

    </Routes>
     
     <Footer />
    </>
  );
    
}



export default App;