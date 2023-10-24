"use client"
import React, { useState, useEffect } from 'react';

function Contract(props: { name: any; gkey: any; lang?: any;  id?: any; }) {
  const { name, lang, gkey, id } = props; 
  const [htmlResponse, setHtmlResponse] = useState<string>('');
  const [contractData, setContractData] = useState([]);
  const [version, setVersion] = useState("0.0");
  const [date, setDate] = useState("");
  const [metaData, setMetaData] = useState([]);
  const baseUrl = "https://demo.pactsafe.io/load/html?sid=959370e5-c097-42fa-9ec4-ec2538b657ff&gkey="
  const metaUrl = "https://api.demo.pactsafe.com/v1.1/contracts/"
  const token = "6PyIpOHOewrRznojK5gcLJ5ZpYNJNeC93bCvfGTVl9o_";

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

    fetch(metaUrl + id + "/versions/@latest", {
      method: 'GET',
      headers: {
        'accept': 'text/plain',
        'Authorization': `Bearer ${token}`
      },
    })
      .then(response => response.text()) // Ensure you get the response as text
      .then(data => {
        // setHtmlResponse(data);
        const allData = JSON.parse(data);
        const dateString = allData.data.effective_time;

        // Create a Date object from the date string
        const date = new Date(dateString);

        // Get the date components
        const year = date.getFullYear();
        const month = date.getMonth() + 1; // Months are 0-indexed, so add 1
        const day = date.getDate();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();

        // Format the date in a human-readable string
        const formattedDate = `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;
        setDate(formattedDate);
        const version = allData.data.full_version_number;
        setVersion(version);

      })
      .catch(error => {
        console.error(error);
    });


  }, [props.name, props.gkey, props.id]);

  return (
    <div>
        <div className='versionRow'>
            <label className='versionElement'>Version: {version}</label>
            <label className='versionElement'>Last Published: {date}</label>
        </div>
        <div dangerouslySetInnerHTML={{ __html: htmlResponse }} />
    </div>
  );
}

export default Contract;
