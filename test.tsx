import React from "react";

interface PageProps {
  id: string;
}

const Page = ({ id }: PageProps) => {
  return <div>{id}</div>;
};

export default Page;
