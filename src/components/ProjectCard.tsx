type Props={
    title: string;
    status: string;
}

export default function ProjectCard({title, status}:Props){

    return(
        <div className="">
            <h2 className="p-4 border rounded mt-3">
                {title}
            </h2>

            <p className="">{status}</p>
        </div>

    )
}


