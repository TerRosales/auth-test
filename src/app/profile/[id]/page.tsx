import React from "react";

type Props = {};

export default function UserProfile({ params }: any) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>User Profile</h1>
      <hr />
      <p className="text-4xl py-2">
        Happy<span className="p-2 ml-2 bg-pink-500">{params.id}</span>
      </p>
    </div>
  );
}
