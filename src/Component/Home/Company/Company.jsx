import Marquee from "react-fast-marquee";
import amazon from "../../../assets/img/amazon.png";
import casio from "../../../assets/img/casio.png";
import moonstar from "../../../assets/img/moonstar.png";
import star from "../../../assets/img/star.png";
import start_people from "../../../assets/img/start_people.png";

export default function Company() {
  const logos = [amazon, casio, moonstar, star, start_people];

  return (
    <div className="overflow-hidden py-15 bg-white">
      <h2 className="text-3xl font-bold text-center my-12">
        Trusted By Leading Brands
      </h2>
      {/* moving container */}
      <div className="flex gap-12  w-max">
        <Marquee
          speed={70}
          gradient={false}
          loop={0}
          play={true}
          autoFill={true}
        >
          {logos.map((logo, index) => (
            <div key={index} className="flex items-center mx-8">
              <img src={logo} alt="company logo" className="h-6 " />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
