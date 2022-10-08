import {ContentOverview, SectionOverview} from '../../../panels';


export function ArchitectureLanding() {
  return (
    <main style={{ padding: "1rem 0" }}>
	<h1>Data native applications</h1>
    <h2>Designing cloud native data driven systems</h2>
<p>Architecting cloud scale data driven applications requires you think about the specific requirements you need to satisfy to deliver your business case upfront. This ensures you can select the suitable technology based on the trade-offs that fit your case best. There is no free lunch here, and all technologies will pose their specific trade-offs, both in terms of availability, consistency and partition tolerance.</p>
<p>When you develop on the cloud, you are architecting distributed systems, wether you are liking it or not. As architects we need to be aware of the peculiarities of the systems you are working with, even if they present themselves as a single instance interface as many data services as managed services do today.</p>

<ContentOverview contents={contents} />

// Provide an overview of the topics touched
	<SectionOverview sections={sections}/>
</main>
  );
}

let sections = [
{
title: "Architecting distributed systems",
subtitle: "Managing your development on the cloud correctly",
learnings: ["", "", ""]
},
{
title: "Design your data model",
subtitle: "How to choose the correct data storage and transformation architecture",
learnings: ["test", "whatever", "works"]
},
{
title: "Optimize the compute layer",
subtitle: "How to navigate the trade-offs in compute solutions for your specific use case",
learnings: ["test", "whatever", "works"]
},
{
title: "Constructing an efficient API",
subtitle: "How to efficiently design the integration patterns with dependent systems",
learnings: ["test", "whatever", "works"]
},
{
title: "",
subtitle: "",
learnings: ["test", "whatever", "works"]
},
{
title: "",
subtitle: "",
learnings: ["test", "whatever", "works"]
},

];

let contents = [
{
type: "",
description: ""
},
{
type: "",
description: ""
},
{
type: "",
description: ""
},
{
type: "",
description: ""
},
{
type: "",
description: ""
},
];
