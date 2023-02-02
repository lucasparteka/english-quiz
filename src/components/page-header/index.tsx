import { Icon } from "@/components";
import Link from "next/link";
import { useRouter } from "next/router";
import { PageHeaderProps } from "./types";

export function PageHeader(props: PageHeaderProps) {
  const { title } = props;
  const { back, pathname } = useRouter();
  const isHome = pathname === "/";

  function renderBackButton() {
    if (isHome) return null;

    return (
      <button
        aria-label="Back to previous page"
        className="absolute left-0"
        onClick={() => back()}
      >
        <Icon name="arrowLeft" className="stroke-white" height={20} />
      </button>
    );
  }

  function renderHome() {
    if (isHome) return null;

    return (
      <Link
        href="/"
        prefetch={false}
        className="absolute right-0"
        aria-label="Back to home"
      >
        <Icon name="home" height={24} className="stroke-white" />
      </Link>
    );
  }

  return (
    <div className="flex justify-center items-center relative pb-4">
      {renderBackButton()}
      <h1 className="title text-center text-white">{title}</h1>
      {renderHome()}
    </div>
  );
}
