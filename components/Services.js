import React, { useState } from 'react';
import criminal_matter from '../images/criminal_matter.svg';
import legal_notice from '../images/legal_notice.svg';
import divorce from '../images/divorce.svg';
import family_matter from '../images/family_matter.svg';
import mediation from '../images/mediation.svg';
import company_reg from '../images/company_reg.svg';
import trade_mark from '../images/trade_mark.svg';
import tax_filing from '../images/tax_filling.svg';
import recovery_matter from '../images/recovery_matter.svg';
import immigration from '../images/immigration.svg';
import service_matter from '../images/service_matter.svg';
import civil_matter from '../images/civil_matter.svg';
import './Services.css';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

function Services() {
  const navigate = useNavigate();

  const servicesData = [
    { id: 1, name: 'Legal notice', imgSrc: legal_notice },
    { id: 2, name: 'Criminal matter', imgSrc: criminal_matter },
    { id: 3, name: 'Divorce', imgSrc: divorce },
    { id: 4, name: 'Family matter', imgSrc: family_matter },
    { id: 5, name: 'Mediation', imgSrc: mediation },
    { id: 6, name: 'Company Reg', imgSrc: company_reg },
    { id: 7, name: 'Trade mark', imgSrc: trade_mark },
    { id: 8, name: 'Tax filling', imgSrc: tax_filing },
    { id: 9, name: 'Recovery matter', imgSrc: recovery_matter },
    { id: 10, name: 'Immigration', imgSrc: immigration },
    { id: 11, name: 'Service matter', imgSrc: service_matter },
    { id: 12, name: 'Civil matter', imgSrc: civil_matter },
  ];

  const handleClick = (e) => {
    const key = e.target.dataset.key;
    console.log(key);
    if(key==='0') {
      navigate('/legalnoticelawyersprofiles')
    }
    if (key==='1') {
      navigate('/criminalmatterlawyersprofiles')
    }
    if(key==='2') {
      navigate('/divorcelawyersprofiles')
    }
    if(key==='3') {
      navigate('/familymatterlawyersprofiles')
    }
    if(key==='4') {
      navigate('/mediationlawyersprofiles')
    }
    if(key==='5') {
      navigate('/companyreglawyersprofiles')
    }
    if(key==='6') {
      navigate('/trademarklawyersprofiles')
    }
    if(key==='7') {
      navigate('/taxfilinglawyersprofiles')
    }
    if(key==='8') {
      navigate('/recoverymatterlawyersprofiles')
    }
    if(key==='9') {
      navigate('/immigrationlawyersprofiles')
    }
    if(key==='10') {
      navigate('/servicematterlawyersprofiles')
    }
    if(key==='11') {
      navigate('/civilmatterlawyersprofiles')
    }
  }

  return (
    <>
      <Navbar />
      <div className="hero-main">
        <div className="hero-h1">
          <h1>Services provided by us</h1>
        </div>
        <div className="hero-services-container">
          {servicesData.map((service,index) => (
            <div
              key={index}
              data-key={index}
              className={`${service.name.toLowerCase().replace(' ', '_')} hero-block`}
              onClick={handleClick}
            >
              <img className="img_services" src={service.imgSrc} alt={service.name} />
              <p>{service.name}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Services;
