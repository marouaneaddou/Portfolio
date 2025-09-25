import {Problem} from "../types"
import { Code , 
  Eye ,
  Github} from 'lucide-react';
  import portfolioData            from "../config.json"

const { coding_challeng } = portfolioData;


const getBgColor = (difficulty:string) => {
    if (difficulty === 'Easy') return 'text-green-400 bg-green-400/10 border-green-400/20';
    if (difficulty === 'Medium') return 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20';
    if (difficulty === 'Hard') return 'text-red-400 bg-red-400/10 border-red-400/20 ';
    return ''
};


const ChallengePage = () => {
    return (
        <>
            <div className="container  mx-auto">
                <div className=" grid gap-4 grid-cols-1 max-w-3xl   mx-auto pb-6 ">
                    <div className="text-white text-2xl font-bold">
                        Coding Challenege
                    </div>
                    <p className="text-white/80">My solutions to various coding problems from LeetCode and other platforms</p>
                    {coding_challeng.map((problem) => (
                        <div key={problem.id} className="border border-white/10 rounded-md p-5 mb-0 bg-white bg-opacity-10 backdrop-blur-[10px]">
                            <span className="text-white mb-4 inline-block">
                                <Code className="mr-2 inline"/> <span>{problem.title}</span>
                                <span className={`ml-1 p-2 rounded-md ${getBgColor(problem.difficulty)}`}>{problem.difficulty}</span>
                            </span>
                            <p className="text-white/70">{problem.description}</p>
                            <div className="md:flex mt-3">
                                <a href={problem.leetCodeUrl} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className=" mb-3 md:mb-0 md:mr-2 bg-orange-yellow flex justify-between p-3 border   border-white/10 rounded-md items-center">
                                    <span>View on LeetCode</span>
                                    <Eye className=" ml-1"/>
                                </a>
                                <a href={problem.githubSolutionUrl} 
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="  text-white flex justify-between p-3 border   border-white/10 rounded-md items-center">
                                    <span>GitHub Solution</span>
                                    <Github className=" ml-1"/>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ChallengePage