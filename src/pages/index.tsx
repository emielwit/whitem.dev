import Card from "./components/card/card";
import CardContainer from "./components/card/card-container";

export default function Home() {
  return (
    <div>
      <section>
        <h1 className="text-3xl font-bold text-zinc-50 sm:text-5xl">
          Senior Front-end <span className="text-[#9333EA]">Developer</span>{" "}
          creating good <span className="text-[#3B82F6]">looking</span> and
          intuitive <span className="text-[#6EE7B7]">applications</span>
          <span className="animate-blinker">_</span>
        </h1>

        <p className="mb-4 mt-10 text-zinc-400 leading-6">
          I’m Emiel Wit, a NL based front-end developer with over seven years of
          experience. I’m specialised in front-end but also enjoying some
          back-end.
        </p>

        <p className="mb-4 text-zinc-400 leading-6">
          I’m currently working at Betty Blocks where I work on a no-code
          platform where people can build applications with no programming
          experience with the help of drag n drop.
        </p>

        {/* <p className="mb-4 text-zinc-400 leading-6">
          Before WP Engine, I worked at BaseKit where I helped shape the future
          of website builders and tools to help small businesses thrive online.
          In my spare time also build tools like Design Vault and Does.Design.
        </p> */}
      </section>
      <section className="mt-8">
        <h2 className="text-zinc-50 mb-4 text-2xl font-bold tracking-tight">
          Favorite technologies
        </h2>
        <p className="my-4 text-zinc-400 leading-6">
          I love exploring new libraries, programing languages and frameworks.
          Here is a list of technologies that I have worked with at school, side
          projects and work.
        </p>
        <CardContainer>
          <Card
            skill="react"
            description="Server management & control panel for my Digital Ocean hosting"
          />
          <Card
            skill="typescript"
            description="Server management & control panel for my Digital Ocean hosting"
          />
          <Card
            skill="javascript"
            description="Server management & control panel for my Digital Ocean hosting"
          />
          <Card
            skill="react"
            description="Server management & control panel for my Digital Ocean hosting"
          />
          <Card
            skill="typescript"
            description="Server management & control panel for my Digital Ocean hosting"
          />
          <Card
            skill="javascript"
            description="Server management & control panel for my Digital Ocean hosting"
          />
        </CardContainer>
      </section>
    </div>
  );
}
