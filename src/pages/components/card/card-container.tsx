import Image from "next/image";

interface Props {
  children: JSX.Element[];
}

export default function CardContainer({ children }: Props) {
  return (
    <div className="flex flex-col sm:grid gap-4 sm:grid-cols-3 sm:grid-rows-3">
      {children}
    </div>
  );
}
