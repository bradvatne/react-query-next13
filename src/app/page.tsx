import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <>
      <h1>Hello, Next.js 13 App Directory!</h1>
      <p>
        <Link href="/initial-data">Prefetching Using initial data</Link>
      </p>
      <p>
        <Link href="/hydration">Prefetching Using Hydration</Link>
      </p>
    </>
  );
};

export default page;
