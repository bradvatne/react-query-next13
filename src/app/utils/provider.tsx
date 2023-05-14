"use client";

import React, { PropsWithChildren, useState } from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

/*
To prevent data from being shared across users and requests, while still ensuring that the QueryClient is only created once per request, we can create a request-scoped singleton instance of the QueryClient.
*/


export const Providers = ({ children }: PropsWithChildren) => {
  const [client] = useState(
    new QueryClient({ defaultOptions: { queries: { staleTime: 5000 } } })
  );

  return (
    <QueryClientProvider client={client}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default Providers;
