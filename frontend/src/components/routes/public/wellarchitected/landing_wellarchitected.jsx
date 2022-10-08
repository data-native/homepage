import React from 'react';
import styled from 'styled-components';
import {ContentOverview, SectionOverview } from '../../../panels';


const StyledPage = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  grid-template-areas: 
    "header "
    "main"
    "footer";
  
  .header {
    grid-area: header;
  }
  .main {
    grid-area: main;
  }
  Mainfooter {
    grid-area: footer;
  }

`;

export function LandingWellarchitected() {
  return (
    <StyledPage>
      <div class="header">
        <h1>Well architected framework</h1>
        <h2>Best practice guidelines for cloud workloads</h2>
          <p>Learn how to leverage the well architected frameworks provided by the hyper scalers like AWS, Azure and GCP to build resilient applications in the cloud</p>
      </div>
      <div class="main">
        <ContentOverview contents={contents} />

        <SectionOverview 
          title="Section title"
          subtitle="Subtitle"
          sections={sections}/>
      </div>
  </StyledPage>
  );
}



let sections = [
{
title: "Reliability",
subtitle: "Build applications able to withstand unforseen outages and failures gracefully",
learnings: ["", "", ""]
},
{
title: "Operational excellence",
subtitle: "Build automation around your workloads to keep maintenance low and uptime up.",
learnings: ["", "", ""]
},
{
title: "Security",
subtitle: "Ensure security from design through to final release",
learnings: ["", "", ""]
},
{
title: "Performance efficiency",
subtitle: "Maximize the energy you spend results in business value",
learnings: ["", "", ""]
},
{
title: "Cost optimization",
subtitle: "Wave your magic wand to make your costs shrink. Now",
learnings: ["", "", ""]
},
{
title: "Sustainability",
subtitle: "Reduce your applications footprint, save resources and benefit everyone",
learnings: ["", "", ""]
},

];

let contents = [
{
type: "Lectures",
description: "Theoretical deep dives"
},
{
type: "Courses",
description: "Get building"
},
{
type: "Readers",
description: "Explore the depth"
}
];
