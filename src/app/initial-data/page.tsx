import React from "react";
import { User } from "../types";
import ListUsers from "./list-users";

/*

It's important to note that server-side rendering (SSR) operates in a different environment 
than the client-side, and not all hooks are designed to work in a SSR context. 
This is because hooks are inherently tied to a React component lifecycle which 
only exists in the browser. As a result, hooks such as useQuery from 'react-query' 
can't be used directly in server-side code outside of a React component.

That's why fetch is used instead of useQuery in the server-side data fetching function. 
On the server, the goal is to fetch the data, then pass it to the client along with the rendered HTML.

*/
async function getUsers() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = (await res.json()) as User[];
  return users;
}

const page = async () => {
  const users = await getUsers();
  return <ListUsers users={users}></ListUsers>;
};

export default page;
