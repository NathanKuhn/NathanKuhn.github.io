import Box from "../../components/Box";

const project1 = `
This website is a work-in-progress. Can you tell?
`;

export default function Projects() {
  return (
    <div className="w-full px-8 pt-10 pb-0 flex flex-col items-center">
      <h1 className="text-white text-6xl font-sans mb-2">My Projects</h1>
      <div className="flex-1 flex flex-col gap-8 p-8 items-stretch w-full">
        <Box title="Project 1" content={project1} />
      </div>
    </div>
  );
}
