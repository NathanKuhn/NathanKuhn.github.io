import Box from "../../components/Box";

const project1 = `
Created for the Cal Poly Robotics Club, this Galaga-inspired game was built using PyGame and MediaPipe. 
The game uses MediaPipe to track the armatures of the player's hands, allowing them to control the position of the ship with one hand and shoot by pinching the other.
Although the game is single player, features such as levels and a persistent high score are used to induce some competition.
The game was on display in the robotics room window from 2023-2024, and did a good job distracting students passing by.
`;

export default function Projects() {
  return (
    <div className="w-full px-8 pt-10 pb-0 flex flex-col items-center">
      <h1 className="text-white text-6xl font-sans mb-2">My Projects</h1>
      <div className="flex-1 flex flex-col gap-8 p-8 items-stretch w-full">
        <Box
          title="Galaxy Game"
          content={project1}
          titleLink="https://github.com/CPSmartWorkbench/GalaxyGame"
        />
      </div>
    </div>
  );
}
