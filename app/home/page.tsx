"use client";
import { title } from "@/components/primitives";
import { Avatar, Input } from "@nextui-org/react";

export default function HomePage() {
  return (
    <div className="w-full h-full flex flex-col justify-center">
      <h1 className={title()}>KungfuMaomao_Web1</h1>
      <Input className="mt-4" type="email" placeholder="Search What You Want" />
      <div className="flex gap-4 items-center self-center mt-6">
        <Avatar
          isBordered
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
        />
        <Avatar
          isBordered
          src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
        />
      </div>
    </div>
  );
}
