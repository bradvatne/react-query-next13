"use client";
/*
In Next.js 13, there was an issue with prefetching data on the server using the 
<Hydrate> method, which was raised in the React Query GitHub issues. When we use 
the <Hydrate> component in a server component, we encounter an error. 
To work around this, we need to create a custom component that renders 
the <Hydrate> component on the client-side using the "use client" flag.
*/

import { Hydrate as RQHydrate, HydrateProps } from "@tanstack/react-query";

const Hydrate = (props: HydrateProps) => {
  return <RQHydrate {...props} />;
};

export default Hydrate;