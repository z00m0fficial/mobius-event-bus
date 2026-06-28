import { createEvent, publish, subscribe } from "./index.js";

subscribe("RequestReceived", (event) => {
  console.log("subscriber observed", event.name, event.correlationId);
});

const event = createEvent({
  name: "RequestReceived",
  source: "mobius-api",
  organizationId: "mobius-technologies",
  correlationId: "corr-demo",
  payload: {
    requestId: "req-demo",
    actorId: "founder-michael-bell",
    text: "Create a Platform Change Proposal to add Founder Mode."
  }
});

await publish(event);
