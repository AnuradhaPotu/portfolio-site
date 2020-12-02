import React from "react"
import { Chrono } from "react-chrono";
import './timeline.css'
  
  const ExpTimeline = () => {
    const items = [
        {
            title: "Jul 2018 to present",
            cardTitle: "FTD",
            cardSubtitle:"Frontend Developer/Sr SDET",
            media: {
              type: "IMAGE",
              source: {
                url: "https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/FTD_Logo_2019.svg/220px-FTD_Logo_2019.svg.png"
              }
            }
          },
          {
            title: "Apr 2015",
            cardTitle: "FHLBC",
            cardSubtitle:"Sr Consultant",
            media: {
              type: "IMAGE",
              source: {
                url: "https://www.fhlbc.com/ResourcePackages/Talon/assets/dist/images/fhlbc-logo.png"
              }
            }
          },
          {
            title: "Feb 2014",
            cardTitle: "BMO Harris/TCS",
            cardSubtitle:"Sr Coordinator",
            media: {
              type: "IMAGE",
              source: {
                url: "https://seekvectorlogo.com/wp-content/uploads/2019/09/bmo-harris-bank-vector-logo.png"
              }
            }
          },
          {
            title: "Aug 2012",
            cardTitle: "StateFarm/TCS",
            cardSubtitle:"Java Automation Engineer/Lead",
            media: {
              type: "IMAGE",
              source: {
                url: "https://static1.st8fm.com/en_US/img/logos/state-farm-logo-for-article.png"
              }
            }
          },
          {
            title: "Dec 2010",
            cardTitle: "Bank of America/TCS",
            cardSubtitle:"QA Analyst",
            media: {
              type: "IMAGE",
              source: {
                url: "https://about.bankofamerica.com/assets/images/logo-color.svg"
              }
            }
          },
        {
      title: "Apr 2007",
      cardTitle: "TCS",
      cardSubtitle:"Java Developer/QA",
      media: {
        type: "IMAGE",
        source: {
          url: "https://upload.wikimedia.org/wikipedia/commons/9/99/TATA_Consultancy_Services_Logo_blue.svg"
        }
      }
    }, 
      ];
      
    return (
        <div id="timeline">
    <Chrono
      items={items}
      mode="VERTICAL_ALTERNATING"
      scrollable={{scrollbar: false}}
    />
  </div>
    )
  }
  export default ExpTimeline;