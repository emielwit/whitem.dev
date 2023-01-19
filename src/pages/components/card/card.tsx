import Image from "next/image";

interface Props {
  skill: string;
  description: string;
}

export default function Card({ skill, description }: Props) {
  return (
    <div className="group flex text-zinc-400 border border-zinc-700 rounded-md sm:flex-col sm:items-center">
      <div className="p-4  sm:w-full sm:flex sm:justify-center sm:bg-zinc-700">
        <Image src={`/${skill}.svg`} alt="skill.svg" width={40} height={40} />
      </div>
      <div className="bg-zinc-900 p-4  sm:mx-0">
        <h5 className="text-base text-zinc-50 capitalize mb-1 group-hover:text-[#9333EA]">
          {skill}
        </h5>
        <p className="text-sm group-hover:text-zinc-50">{description}</p>
      </div>
    </div>
  );
}
