import Box from '../../components/Box';

export default function Projects() {
    return (
        <div className="w-full px-8 pt-10 pb-0 flex flex-col items-center">
            <h1 className="text-white text-6xl font-sans mb-2">My Projects</h1>
            <div className="flex-1 flex flex-col gap-8 p-8 items-stretch w-full">
                <Box title="Project 1">
                    <p className="text-gray-400">Project 1 description goes here. Brief details about the project.</p>
                </Box>
                <Box title="Project 2">
                    <p className="text-gray-400">Project 2 description goes here. Brief details about the project.</p>
                </Box>
                <Box title="Project 3">
                    <p className="text-gray-400">Project 3 description goes here. Brief details about the project.</p>
                </Box>
                <Box title="Project 4">
                    <p className="text-gray-400">This website is a work-in-progress. Can you tell?</p>
                </Box>
            </div>
        </div>
    );
}
