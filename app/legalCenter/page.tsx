"use client"

import { Footer, Navbar } from "@/devlink";
import PactSafeHTMLViewer from './contract'; 
import React, { useState, useEffect } from 'react';
import Contract from "./contract";
import ContractOption from "./contractOption";

export default function legalCenter(){
    const contracts = [
        {
            name: "Netflix Terms of Use",
            lang: "English",
            gkey: "terms-en"
        },
        {
            name: "Privacy Statement",
            lang: "English",
            gkey: "privacy-en"
        },
        {
            name: "Netflix Gift Card and Balance Terms",
            lang: "English",
            gkey: "gift-en"
        },
        {
            name: "Términos de uso de Netflix",
            lang: "Spanish",
            gkey: "terms-es"
        },
        {
            name: "Aviso de privacidad",
            lang: "Spanish",
            gkey: "privacy-es"
        },
        {
            name: "Términos de las tarjetas de regalo y el saldo de Netflix",
            lang: "Spanish",
            gkey: "gift-es"
        }]
    const [htmlResponse, setHtmlResponse] = useState<string>('');
    const [selectedLanguage, setSelectedLanguage] = useState('English');
    const [selectedContract, setSelectedContract] = useState(
        {
            name: "Netflix Terms of Use",
            lang: "English",
            gkey: "terms-en"
        }
    );
    const baseUrl = "https://demo.pactsafe.io/load/html?sid=959370e5-c097-42fa-9ec4-ec2538b657ff&gkey="
    const englishGkey = "embedded-h1-fo4r0n"
    const spanishGkey = "embedded-h1-fo4r0n-copy"
    const filteredContracts = contracts.filter((contract) => contract.lang === selectedLanguage);


    if(selectedContract == null){
        debugger
        setSelectedContract(filteredContracts[0]);
    }

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedLanguage(event.target.value);
    };

    const handleChildClick = (name, gkey) => {
        const tempSelectedContract = contracts.find((contract) => contract.name === name);
        if (tempSelectedContract) {
            setSelectedContract( {
                name: tempSelectedContract.name,
                lang: tempSelectedContract.lang,
                gkey: tempSelectedContract.gkey
            });
            console.log(`Selected Contract: ${selectedContract.name}`);
            // debugger
        } else {
            console.log('Contract not found.');
        }
    };




    return (
        <div>
            < Navbar />
            <div className="container main-section">
                <div className="w-layout-layout">
                    <div className="w-layout-cell">
                        <h3>Legal Center</h3>

                    </div>
                    <div className="w-layout-cell">
                        {/* <label>Language</label> */}
                        <select
                            id="language"
                            name="language"
                            value={selectedLanguage}
                            onChange={handleLanguageChange}
                            className="button"
                        >
                            <option value="English">English</option>
                            <option value="Spanish">Spanish</option>
                        </select>

                    </div>
                    
                    


                </div>
                <div className="w-layout-layout left-heavy">
                        <div className="w-layout-cell">
                            <h3 className="option">Contracts   </h3>
                            <div className="options-section" id="insert-here">
                                {filteredContracts.map((contract) => (
                                    <ContractOption
                                        key={contract.gkey}
                                        onClick={handleChildClick}
                                        name={contract.name}
                                        lang={contract.lang}
                                        gkey={contract.gkey}
                                    />
                                ))}                               
                            </div>
                        </div>
                    <div className="w-layout-cell">
                        {/* <div dangerouslySetInnerHTML={{ __html: htmlResponse }} /> */}
                        {/* < Contract name={contracts[0].name} lang={contracts[0].lang} gkey={contracts[0].gkey} /> */}
                        <Contract name={selectedContract.name} lang={selectedContract.lang} gkey={selectedContract.gkey} />


                    </div>
                    
                </div>



            </div>


            <Footer />
        </div>
    )
}
