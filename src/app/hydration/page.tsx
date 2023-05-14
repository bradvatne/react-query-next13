import getQueryClient from "@/app/utils/getQueryClient";
import Hydrate from "@/app/utils/hydrateClient";
import { dehydrate } from "@tanstack/query-core";
import ListUsers from "./list-users";
import { User } from "../types";

/*

This is a Server Component that prefetches the query &  passes the prefetched data to the listUsers.tsx component.

When the Server Component renders, calls to useQuery nested inside the <Hydrate> Client 
Component will have access to the prefetched data that is provided in the state property.

*/

import React from "react";

//Used as callback in the react-query function. fetches user data
const getUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = (await res.json()) as User[];
  return users;
};

const page = async () => {
  //call to a function that creates/caches an instance of QueryClient
  const queryClient = getQueryClient();
  /*
  prefetching a query with the key "hydrate-users" using the getUsers fetch function. 
  When prefetchQuery is called, React Query will run the getUsers fetch function and 
  store the result in its internal cache against the key "hydrate-users". 
  await keyword ensures that the prefetching is completed before moving on to the next line of code.
  */
  await queryClient.prefetchQuery(["hydrate-users"], () => getUsers());
  /*
"Dehydration" in this context means taking the current state (which includes the results of any
 queries that have been prefetched) and serializing it into a format that can be sent to the client.
  */
  const dehydratedState = dehydrate(queryClient);
  /*
This JSX is returning a Hydrate component from React Query, which is used to rehydrate the state of 
the QueryClient on the client side. The state prop is the dehydrated state from the server. 
When this component is rendered on the client, it will rehydrate (or "fill up") the client's QueryClient
  */
  return (
    <Hydrate state={dehydratedState}>
      <ListUsers />
    </Hydrate>
  );
};

/*The ListUsers component, which is a child of the Hydrate component, will likely use the useQuery hook 
(or similar) with the query key "hydrate-users" to access the prefetched users data.
*/

export default page;
