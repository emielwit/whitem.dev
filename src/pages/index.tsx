import Card from "./components/card/card";
import CardContainer from "./components/card/card-container";

export default function Home() {
  return (
    <div>
      <section>
        <h1 className="text-3xl font-bold text-zinc-50 sm:text-5xl">
          Senior Front-end Developer creating good looking and intuitive
          applications.
        </h1>

        <p className="mb-4 mt-10 text-zinc-400 leading-6">
          I’m Emiel Wit, a NL based front-end developer with over seven years of
          experience. I specialise in interface design for mobile and web-based
          applications with a focus on simplicity & usability.
        </p>

        <p className="mb-4 text-zinc-400 leading-6">
          I’m currently working at WP Engine where I design some of the worlds
          best WordPress products including Advanced Custom Fields, WP Migrate
          and WP Offload Media.
        </p>

        <p className="mb-4 text-zinc-400 leading-6">
          Before WP Engine, I worked at BaseKit where I helped shape the future
          of website builders and tools to help small businesses thrive online.
          In my spare time also build tools like Design Vault and Does.Design.
        </p>
      </section>
      <section className="mt-8">
        <h2 className="text-zinc-50 mb-4 text-2xl font-bold tracking-tight">
          Favorite technologies
        </h2>
        <p className="my-4 text-zinc-400 leading-6">
          I love exploring new libraries, programing languages and frameworks.
          Here is a list of technologies that I have worked with at school, side
          projects and open source.
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
