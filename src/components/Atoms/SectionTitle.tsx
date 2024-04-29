import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function SectionTitle({ children }: Props) {
  return <h3 className="font-bold text-xl">{children}</h3>;
}

export default SectionTitle;
