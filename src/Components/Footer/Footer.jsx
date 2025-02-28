import { RiCopyrightFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="bg-black rounded-[4px] overflow-x-hidden">
      <section className="flex flex-col items-center text-white py-6 font-semibold">
        <h1>
          <RiCopyrightFill className="inline mr-1.5 text-2xl" />
          <span className="text-2xl">Pritom Mohajon</span>
        </h1>
        <h1 className="mt-1.5">A self learned MERN Stack developer</h1>
        <h1>Dept. of CSTE, NSTU</h1>
      </section>
    </div>
  );
};

export default Footer;
