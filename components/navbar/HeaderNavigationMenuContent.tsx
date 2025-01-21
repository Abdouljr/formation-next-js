import React from "react";

type Props = { title: string; subtitle: string };
export default function HeaderNavigationMenuContent({
  title,
  subtitle,
}: Props) {
  return (
    <div className="flex flex-col space-y-1 w-full">
      <div className="font-semibold">{title}</div>
      <div className="text-sm">{subtitle}</div>
    </div>
  );
}
