import { Metadata } from "next";
import { AiOutlineHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaJsSquare, FaReact, FaSass } from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiRedux,
} from "react-icons/si";
import GsapMagnetic from "../../components/Gsap";
const skills = [
  {
    title: "HTML",
    icon: <AiOutlineHtml5 />,
  },
  {
    title: "CSS",
    icon: <FaCss3Alt />,
  },
  {
    title: "JavaScript",
    icon: <FaJsSquare />,
  },
  {
    title: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    title: "React",
    icon: <FaReact />,
  },
  {
    title: "Next",
    icon: <SiNextdotjs />,
  },
  {
    title: "Redux/Toolkit",
    icon: <SiRedux />,
  },
  {
    title: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },
  {
    title: "SASS",
    icon: <FaSass />,
  },
];
export const metadata: Metadata = {
  title: "About",
};
const page = () => {
  return (
    <>
      <div className="pb-20 md:pt-40 pt-28 flex md:flex-row flex-col  justify-center items-center gap-10 text-center p-4">
        <div className="flex justify-center items-center md:w-[30%] w-[60%]">
          <img
            src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1703721600&semt=ais"
            alt="me"
            className="rounded-[24px]"
          />
        </div>
        <div className="md:w-[70%] w-full">
          <p className="text-2xl text-justify md:text-4xl font-extrabold py-4 leading-tight block dark:text-white">
            HEY! NICE TO MEET YOU 👋
          </p>
          <p className="md:text-[20px] text-[16px] text-justify dark:text-white text-gray-500 font-thin">
            I’m a product designer living in Brooklyn, interested in how people
            and software can work together to make life better. I'm currently at
            Snap, where I design experiences around finding and using AR Lenses
            on Snapchat. I previously worked at ZipRecruiter, where I designed
            experiences and interfaces to help millions of people get jobs.
            <br />
            <br />I started on the marketing design side, honing my visual
            design skills and learning the ins and outs of keyframe animation,
            then moved into the world of product. As a designer, I enjoy being a
            generalist with a focus on craft and prototyping. I value beautiful
            visuals backed by smart systems thinking.
          </p>
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-around gap-6 md:gap-10 pb-20 dark:text-white px-4">
        {skills.map((el) => (
          <GsapMagnetic key={el.title}>
            <div className="skill h-16 w-36 md:w-48  rounded-2xl bg-gray-100 shadow-md border-[0.2px] dark:bg-[#133B5C] flex justify-center items-center  gap-2 hover:bg-[#f1f1f1]">
              <span>{el.icon}</span> {el.title}{" "}
            </div>
          </GsapMagnetic>
        ))}
      </div>
    </>
  );
};

export default page;
