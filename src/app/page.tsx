import Header from "@/components/header";
import Card from "@/components/card";

export default function Home() {
  return (
    <>
      <Header
        header="Reliable, efficient delivery"
        headerSpan="Powered by Technology"
        text="Our Artificial Intelligence powered tools use millions of project data points 
        to ensure that your project is successful"
      />
      <main className="m-4 max-w-[1024px] mx-auto">
        <div className="lg:grid grid-cols-3 grid-rows-4 m-auto w-fit p-4">
          <Card
            style={{
              borderColor: "hsl(180, 62%, 55%)",
              gridRow: "2 / span 2",
            }}
            header="Supervisor"
            text="Monitors activity to identify project roadblocks"
            image="/icon-supervisor.svg"
            imageText="Supervisor image"
          />
          <Card
            style={{
              borderColor: "hsl(0, 78%, 62%)",
              gridColumn: "2",
              gridRow: "1 / span 2",
            }}
            header="Team Builder"
            text="Scans our talent network to create the optimal team for your project"
            image="/icon-team-builder.svg"
            imageText="Supervisor image"
          />
          <Card
            style={{
              borderColor: "hsl(34, 97%, 64%)",
              gridRow: "3 / span 2",
              gridColumn: "2",
            }}
            header="Karma"
            text="Regularly evaluates our talent to ensure quality"
            image="/icon-karma.svg"
            imageText="Supervisor image"
          />
          <Card
            style={{
              borderColor: "hsl(212, 86%, 64%)",
              gridRow: "2 / span 2",
              gridColumn: "3",
            }}
            header="Calculator"
            text="Uses data from past projects to provide better delivery estimates"
            image="/icon-calculator.svg"
            imageText="Supervisor image"
          />
        </div>
      </main>
    </>
  );
}
