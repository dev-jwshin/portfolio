import { projects } from "./project.data";
import Masonry from 'react-masonry-css';
import './Project.css';

function Project() {
  return (
    <div className="flex flex-col w-full h-full text-white overflow-y-auto">
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {projects.map((project) => (
          <div key={project.hash}>
            <div className="flex flex-col w-full cursor-pointer group">
              <div className="w-full rounded-t-[10px] overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full group-hover:scale-110 transition-all duration-300" />
              </div>
              <div className="relative flex flex-col w-full h-full gap-3.5 bg-[#222] p-5 rounded-b-[10px]">
                <div className="flex flex-col gap-0.5">
                  <p className="text-2xl font-bold">{project.title}</p>
                  <p className="text-sm text-gray-300 pb-1">{project.category}</p>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-300 underline">
                      바로가기
                    </a>
                  )}
                  {project.reason && (
                    <p className="text-sm text-gray-300">
                      {project.reason}
                    </p>
                  )}
                </div>
                <div className="flex flex-col gap-1 text-base text-gray-100">
                  {project.description.map((description) => (
                    <p key={description}>{description}</p>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 text-black">
                  {project.tags.map((tag) => (
                    <p key={tag} className="text-sm bg-white rounded-[5px] px-2 py-1">{tag}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Masonry>
    </div>
  );
}

export default Project;