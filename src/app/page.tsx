import Box from '../components/Box';

export default function Home() {
  return (
    <div className="w-full px-8 pt-10 pb-0 flex flex-col items-center">
      <h1 className="text-white text-6xl font-sans mb-2">Hello There!</h1>

      <div className="flex-1 flex flex-col gap-8 p-8 items-stretch w-full">
        <Box title="About">
          <p className="text-gray-400">
            I put this site together to have easy access to some of my favorite projects I've worked on. I have some experience with Java, OpenGL, Robotics, Rust, Minecraft, PyTorch, Unicycling, and AWS.
          </p>
        </Box>
      </div>

    </div>
  );
}
