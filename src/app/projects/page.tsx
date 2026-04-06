import ProjectCard from "../../components/ProjectCard"

// Fundamentals learned Arrays, Mapping, keys, Rendering lists
export default function Projects(){

    const Projects=[
        {
            id:1,
            title: "AI Resume Analyzer",
            status: "In Progress"
        },
        {
            id:2,
            title: "SDG App-Learnin gand Quizzes",
            status: "Completed"
        },
        {
            id:3,
            title: "AI Powered Healtcare app",
            status: "Completed"
        },
        
    ]

    return(
        <div className="p-10">
            <h1 className="text-3xl font-bold">
                Projects
            </h1>

            <p className="text-2xl">
                Projects are displayed below:
            </p>
            <div className="mt-6">
                {Projects.map(project=>(
                    <div 
                    key={project.id}
                    className=""
                    >
                         <ProjectCard 
            title={project.title}
            status={project.status}
            />

                        {/* Data that we are using for card item or at some other place but we want to create a separate card component for cards section  */}
                {/* <h2 className="font-bold">
                    {project.title}                    
                </h2> 
                <p>
                    {project.status}
                </p> */}
                </div>       

                ))}
            </div>

            
        </div>
    )
}