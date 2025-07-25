import Box from "../components/Box";

const aboutMarkdown = `
I put site together to have easy access to some of my favorite projects I've worked on. I have some experience with Java, OpenGL, Robotics, Rust, Minecraft, PyTorch, Unicycling, and AWS.
`;

export default function Home() {
  return (
    <div className="px-8 pt-10 pb-0 flex flex-col items-center">
      <h1 className="text-white text-6xl font-sans mb-2">Hello There!</h1>
      <div className="flex-1 flex flex-col p-8 gap-8">
        <Box title="About" content={aboutMarkdown} />
      </div>
    </div>
  );
}
