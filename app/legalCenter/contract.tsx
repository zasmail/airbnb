"use client"
import React, { useState, useEffect } from 'react';

function Contract(props) {
  const { name, lang, gkey } = props; 
  const [htmlResponse, setHtmlResponse] = useState<string>('');
  const [contractData, setContractData] = useState([]);
  const [metaData, setMetaData] = useState([]);
  const baseUrl = "https://demo.pactsafe.io/load/html?sid=959370e5-c097-42fa-9ec4-ec2538b657ff&gkey="
  const metaUrl = "https://demo.pactsafe.io/load/json?sid=959370e5-c097-42fa-9ec4-ec2538b657ff&gkey="

  useEffect(() => {
    // Make the GET request on component load
    fetch(baseUrl + gkey, {
      method: 'GET',
      headers: {
        'accept': 'text/plain',
      },
    })
      .then(response => response.text()) // Ensure you get the response as text
      .then(data => {
        setHtmlResponse(data);
      })
      .catch(error => {
        console.error(error);
    });

    fetch(metaUrl + gkey, {
      method: 'GET',
      headers: {
        'accept': 'text/plain',
      },
    })
      .then(response => response.text()) // Ensure you get the response as text
      .then(data => {
        // setHtmlResponse(data);
        const allData = JSON.parse(data);
        // debugger;
      })
      .catch(error => {
        console.error(error);
    });


  }, [props.name, props.gkey]);

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: htmlResponse }} />
    </div>
  );
}

export default Contract;
