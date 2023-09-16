import { TypeAnimation } from "react-type-animation";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src="https://res.cloudinary.com/quinn-daisies/image/upload/v1690905877/sofware-developer-thinking-while-touching-beard-while-typing-laptop-sitting-desk-with-multiple-screens-parsing-code-focused-database-admin-working-with-team-coding-background_jlcilf.jpg"
        alt="Images"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-4xl text-3xl font-bold text-gray-800 sm:text-left text-center">
            My Name Is Ebire Folayemi Michael
          </h1>
          <h2 className="flex sm:text-3xl text-1xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                "Fullstack Programmer",
                1000,
                "Software Developer",
                2000,
                "Search Engine Optimization Specialist",
                3000,
              ]}
              wrapper="div"
              cursor={true}
              speed={50}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>

          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <FaTwitter className="cursor-pointer" size={20} />
            <FaInstagram className="cursor-pointer" size={20} />
            <FaFacebook className="cursor-pointer" size={20} />
            <FaLinkedin className="cursor-pointer" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
