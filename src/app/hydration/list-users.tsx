"use client";

import { User } from "../types";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import React, { useState } from "react";

const getUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = (await res.json()) as User[];
  return users;
};

export const ListUsers = () => {
  const [count, setCount] = useState(0);
  const { data, isLoading, isFetching, error } = useQuery(
    ["hydrate-users"],
    () => {
      return getUsers();
    }
  );

  return (
    <main className="container mx-auto p-4">
      <div>
        <h1 className="text-2xl font-medium">{count}</h1>
        <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>
        <button onClick={() => setCount((prev) => prev - 1)}>Decrease</button>
      </div>
      {error ? (
        <p>Oh no, there was an error</p>
      ) : isLoading || isFetching ? (
        <p>Loading...</p>
      ) : data ? (
        <div className="grid grid-cols-4 gap-5">
          {data.map((user) => (
            <div key={user.id} className="border border-slate-400 text-center">
              <Image
                alt={user.name}
                src={`https://robohash.org/${user.id}?set=set2&size=180x180`}
                width={180}
                height={180}
              />
              <h3 className="text-lg">{user.name}</h3>
            </div>
          ))}
        </div>
      ) : null}
    </main>
  );
};

export default ListUsers;
