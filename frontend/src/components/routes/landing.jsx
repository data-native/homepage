import {ContentOverview, SectionOverview} from '../panels';


export function LandingPage() {
  return (
    <main style={{ padding: "1rem 0" }}>
	<h1>Welcome to the cloud scale up </h1>
    <h2>Your resource for all things scale out for your start up</h2>
<p>Learn the building blocks of successful application design on the cloud with a focus on building evolutionary architectures that grow and adapt with you as you learn about your market. </p>
<p>Through a combination of currated video collections, sumaries, articles and hands on tutorials we want to provide a handy guide to you as your product evolves and progresses.</p>
<p>This resource is a content aggregator that summarizes the individual interactions and learning we have with you across variosu channels. So get in touch and discuss with us</p>
// Provide links to sources by type

<ContentOverview contents={contents} />

// Provide an overview of the topics touched
	<SectionOverview sections={sections}/>
</main>
  );
}

let sections = [
{
title: "Design for fast iterations",
subtitle: "Architect your business and application to scale and react to changes in demand",
learnings: ["test", "whatever", "works"]
},
{
title: "Pay only for value delivered",
subtitle: "Cost optimize your architecture to scale linearly with usage as you grow",
learnings: ["test", "whatever", "works"]
},
{
title: "Use AI to interact with your market in real-time",
subtitle: "Utilize smart decision making based on appliction and market insights to engage your audience",
learnings: ["test", "whatever", "works"]
},
{
title: "Automate your deployments with DevOps",
subtitle: "Create scalable, trusted processes to deploy updates to your application with ease",
learnings: ["test", "whatever", "works"]
},
{
title: "Build in security from the start",
subtitle: "Design and develop secure, trustured applications you know will withstand todays cyber security threads",
learnings: ["test", "whatever", "works"]
},
{
title: "Deliver data insights at ease",
subtitle: "Optimize your data analytics pipelines to deliver high impact insights at a low cost point",
learnings: ["test", "whatever", "works"]
},
{
title: "Build on distributed networks to dliever the future of the web",
subtitle: "",
learnings: ["test", "whatever", "works"]
}

];

let contents = [
{
type: "Courses",
description: "Recommended courses to dive into specific topics"
},
{
type: "Articles",
description: "Deep dive into specific challenges with references to further material, both code, libraries and documentation for your further studies"
},
{
type: "Tutorials",
description: "Follow along example solutions to gauge your practical learning for a topic and build on provided starter code for your applicaiton."
},
{
type: "Sample Applications",
description: "Take a deep dive into example implementation for common elements of a web scale up. You can read through the architecture documentation, play around with the sample apps or follow along technical implementation videos to learn about the details of the architectuer as the application gets developed."
},
];
