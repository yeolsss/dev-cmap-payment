import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function DetailInfoText({ children }: Props) {
  return <span className="text-xs opacity-50">{children}</span>;
}

export default DetailInfoText;
