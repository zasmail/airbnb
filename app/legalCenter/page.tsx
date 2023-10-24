"use client"

import { Footer, Navbar } from "@/devlink";
import PactSafeHTMLViewer from './contract'; 
import React, { useState, useEffect } from 'react';
import Contract from "./contract";
import ContractOption from "./contractOption";

export default function LegalCenter(){
    const contracts = [
        {
            name: "Netflix Terms of Use",
            lang: "English",
            gkey: "terms-en",
            id: 5628
        },
        {
            name: "Privacy Statement",
            lang: "English",
            gkey: "privacy-en",
            id: 5625
        },
        {
            name: "Netflix Gift Card and Balance Terms",
            lang: "English",
            gkey: "gift-en",
            id: 5630
        },
        {
            name: "Términos de uso de Netflix",
            lang: "Spanish",
            gkey: "terms-es",
            id: 5629
        },
        {
            name: "Aviso de privacidad",
            lang: "Spanish",
            gkey: "privacy-es",
            id: 5627
        },
        {
            name: "Términos de las tarjetas de regalo y el saldo de Netflix",
            lang: "Spanish",
            gkey: "gift-es",
            id: 5632
        }]
    const [htmlResponse, setHtmlResponse] = useState<string>('');
    const [selectedLanguage, setSelectedLanguage] = useState('English');
    const [selectedContract, setSelectedContract] = useState(
        {
            name: "Netflix Terms of Use",
            lang: "English",
            gkey: "terms-en",
            id: 5628

        }
    );
    const baseUrl = "https://demo.pactsafe.io/load/html?sid=959370e5-c097-42fa-9ec4-ec2538b657ff&gkey="
    const englishGkey = "embedded-h1-fo4r0n"
    const spanishGkey = "embedded-h1-fo4r0n-copy"
    // const filteredContracts = contracts.filter((contract) => contract.lang === selectedLanguage);
    const filteredContracts = function(){
        const filtered = contracts.filter((contract) => contract.lang === selectedLanguage);
        if(!filtered.some(contract => contract.gkey === selectedContract.gkey)){
            setSelectedContract(filtered[0]);
        } 
        return filtered;
    }

    const handleLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedLanguage(event.target.value);
    };

    const handleChildClick = (name: any, gkey: any) => {
        const tempSelectedContract = contracts.find((contract) => contract.name === name);
        if (tempSelectedContract) {
            setSelectedContract( {
                name: tempSelectedContract.name,
                lang: tempSelectedContract.lang,
                gkey: tempSelectedContract.gkey,
                id: tempSelectedContract.id
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
                            {/* <h3 className="option">Contracts   </h3> */}
                            <div className="options-section" id="insert-here">
                                {filteredContracts().map((contract) => (
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
                        {/* <h1>{selectedContract.name}</h1> */}
                        <Contract name={selectedContract.name} lang={selectedContract.lang} gkey={selectedContract.gkey} id={selectedContract.id}/>


                    </div>
                    
                </div>



            </div>


            <Footer />
        </div>
    )
}