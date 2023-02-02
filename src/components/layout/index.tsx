import { HTMLAttributes } from "react";

export function Layout(props: HTMLAttributes<HTMLDivElement>) {
  const { children } = props;

  return <div className="flex flex-col h-full">{children}</div>;
}
