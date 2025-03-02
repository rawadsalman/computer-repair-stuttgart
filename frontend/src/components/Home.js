// src/components/Home.js
import React from 'react';
import Services from './Services';
import { FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { motion } from "framer-motion";
import whatsappBarcode from '../whatsapp-barcode.png';


import '../styles/home.css'; 


function Home() {
  return (
    <div className="home container">
	  <div className="home-content">
		<div className="text-content">
		  <h3 style={{ fontSize: "25px", color: "#204075" }}>Willkommen bei Computer Services in Stuttgart</h3>
		  <p style={{ fontSize: "18px", fontWeight: "bold", textAlign:"center", color: "#499446"}}>Wir finden die beste Lösungen für Ihre Computerprobleme.</p>
		</div>
		<div className="contact-info">
		  <FaPhoneAlt className="contact-icon" />
		  <h3>+49 0157 31936078</h3>
			   <motion.div
			   className="whatsapp-icon"
				animate={{ scale: [1, 1.2, 1] }} // Pulsing effect
				transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
			    >
               <FaWhatsapp style={{ fontSize: "40px", color: "#25D366" }}/>
               </motion.div>
			<img
              src={whatsappBarcode}
              alt="WhatsApp Barcode"
              style={{ width: "100px", marginLeft: "10px" }}
            />
		</div>
	  </div>
    <Services />
    </div>
  );
}

export default Home;
