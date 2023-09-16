interface ProjectItemsProps {
  img: string;
  title: string;
}

const ProjectItems: React.FC<ProjectItemsProps> = ({ img, title }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r hover:from-gray-200 hover:to-[#001b5c]">
      <img
        className="rounded-xl group-hover:opacity-10"
        src={img}
        alt={title}
      />
      <div className="hidden group-hover:block absolute top-[50%] left[50%] translate-x-[-50%] translate-y-[-50%] justify-center items-center m-auto">
        <h3 className="text-2xl font-bold text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">React JS</p>
        <a href="">
          <p className="text-center p-3 round-lg bg-white text-gray-700 font-bold cursor-pointer text-lg">
            More Info
          </p>
        </a>
      </div>
    </div>
  );
};

export default ProjectItems;
