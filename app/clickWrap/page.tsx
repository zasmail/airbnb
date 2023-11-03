import { Footer, Navbar } from "@/devlink";
import React, { useState, useEffect } from 'react';


export default function LegalCenter(){
    return(
        <div>
            < Navbar />
            <div className="container main-section">
                <div className="w-layout-layout"></div>
                <input type="email" id="userEmail" placeholder="Your Email"/>
            </div>
            <Footer />
        </div>
    )
}

