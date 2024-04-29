import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function DetailNameTitle({ children }: Props) {
  return <span className="text-sm">{children}</span>;
}

export default DetailNameTitle;
