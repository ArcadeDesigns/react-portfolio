import ProjectItems from "./ProjectItems";
import PropertyImg from "../assets/images/pexels-aleksandar-pasaric-618079.jpg";
import PyQt5Img from "../assets/images/pexels-alex-azabache-4039921.jpg";
import NextImg from "../assets/images/pexels-michal-marek-1774389.jpg";

const projects = () => {
  return (
    <div id="project" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5c]">
        projects
      </h1>
      <p className="text-center py-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div className="grid sm:grid-cols gap-12">
        <ProjectItems img={PropertyImg} title="Sample Image" />
        <ProjectItems img={PyQt5Img} title="Sample Image Two" />
        <ProjectItems img={NextImg} title="Sample Image Three" />
        <ProjectItems img={PropertyImg} title="Sample Image Four" />
      </div>
    </div>
  );
};

export default projects;
