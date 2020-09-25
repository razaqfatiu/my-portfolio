import React from 'react'
import '../Styles/About.scss'


export default function About() {
  return (
    <div className="about-component" id="about">
      <h1>About Me</h1>

      <div className="education-div">
        <h2 className="education">EDUCATION</h2>
        <ul className="edu-bg">
          <li>I am a FullStack Developer Student at <a href="https://openclassrooms.com/">Openclassroom</a> </li>
          <li>I am a Mathematics graduate at University of Ilorin </li>
        </ul>
      </div>

      <div className="work-exp">
        <h2>WORK EXPERIENCE</h2>
        <details>
          <summary>FullStack Developer at Nomaex: Built a fully functional Ecommerce Platform with MERN Stack </summary>
          <ul>
            <li>Architected and built database models/schemas of the entire platform using on  PostgreSQL using SEQUELIZE ORM.</li>
            <li>Wrote migrations and seed scripts for versioning and populating the tables.</li>
            <li>Developed API endpoints to interact with the database and other systems to process requests. </li>
            <li>Implemented frontend designs and responsiveness with bootstrap and Consumed the API endpoints and managed responses in the frontend state with REDUX.</li>
            <li>Integrated third - party APIs for payment handling, AWS SES for email communications.</li>
            <li>Designed frontend with a lot of reusable components to ensure clean codes and  reduce ambiguity.</li>
            <li>Deployed, set up migration/seeds and configured the environment variables on the Digital Ocean</li>
          </ul>
        </details>

        <details>
          <summary>Microsoft Software Support Engineer</summary>
          <ul>
            <li>Supporting Customers across EMEA region to resolve issues with PowerApps, Power Automate, Custom connector, Data Integration with Common Data Service, SQL, SharePoint etc.</li>
            <li>Building, Customizing SharePoint Forms in PowerApps and Assisting with Business processes development with MS Flow and PowerApps.</li>
            <li>Integrating custom API Services to Power Platform using custom connector.</li>
            <li>Customization of Power BI dashboards and reports with multiple data sources, Performing data analysis with Power BI and integration of Power BI with PowerApps.</li>
          </ul>
        </details>
      </div>

    </div>
  )
}

