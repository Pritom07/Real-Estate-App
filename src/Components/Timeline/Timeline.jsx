import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Timeline = () => {
  useEffect(() => {
    AOS.init({ duration: 400, once: true, easing: "ease-in-out-sine" });
  }, []);

  return (
    <div className="max-w-7xl mx-auto overflow-x-hidden">
      <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
        <li>
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div
            data-aos="fade-right"
            className="timeline-start mb-10 md:text-end font-medium text-slate-500"
          >
            <time className="font-mono italic text-black font-semibold">
              2005
            </time>
            <div className="text-lg font-black text-black">
              Foundation of Excellence
            </div>
            Our journey began with a vision to redefine luxury real estate by
            placing trust at the core of every interaction. We recognized that
            purchasing a luxury property is not just a transaction but a
            life-changing decision. From the very beginning, we committed to
            providing complete transparency, ensuring clients were well-informed
            about every detail, from property history to market trends. Our
            dedication to ethical business practices set us apart, establishing
            a foundation built on honesty and integrity.
          </div>
          <hr />
        </li>

        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div
            data-aos="fade-left"
            className="timeline-end md:mb-10 font-medium text-slate-500"
          >
            <time className="font-mono italic text-black font-semibold">
              2010
            </time>
            <div className="text-lg font-black text-black">
              Enhanced Client Confidentiality
            </div>
            Understanding the high level of discretion expected by our
            clientele, we implemented advanced client confidentiality measures.
            We introduced secure communication channels and safeguarded client
            information through cutting-edge encryption technologies. This
            allowed our clients, ranging from high-profile personalities to
            discerning investors, to explore luxury estates with confidence and
            peace of mind. Our commitment to privacy and confidentiality further
            solidified our reputation as a trusted partner in luxury real
            estate.
          </div>
          <hr />
        </li>

        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div
            data-aos="fade-right"
            className="timeline-start mb-10 md:text-end font-medium text-slate-500"
          >
            <time className="font-mono italic text-black font-semibold">
              2015
            </time>
            <div className="text-lg font-black text-black">
              Enhanced Client Confidentiality
            </div>
            Understanding the high level of discretion expected by our
            clientele, we implemented advanced client confidentiality measures.
            We introduced secure communication channels and safeguarded client
            information through cutting-edge encryption technologies. This
            allowed our clients, ranging from high-profile personalities to
            discerning investors, to explore luxury estates with confidence and
            peace of mind. Our commitment to privacy and confidentiality further
            solidified our reputation as a trusted partner in luxury real
            estate.
          </div>
          <hr />
        </li>

        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div
            data-aos="fade-left"
            className="timeline-end md:mb-10 font-medium text-slate-500"
          >
            <time className="font-mono italic text-black font-semibold">
              2020
            </time>
            <div className="text-lg font-black text-black">
              Digital Transparency Initiative
            </div>
            Embracing digital transformation, we launched a comprehensive
            Digital Transparency Initiative. This included high-definition
            virtual property tours, real-time price updates, and secure online
            transaction systems. By allowing clients to explore properties
            remotely with complete clarity on pricing and features, we empowered
            them with information to make confident purchasing decisions. This
            initiative was particularly significant in building trust during
            times when in-person visits were challenging, demonstrating our
            adaptability and continued commitment to transparent client
            interactions.
          </div>
          <hr />
        </li>

        <li>
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div
            data-aos="fade-right"
            className="timeline-start mb-10 md:text-end font-medium text-slate-500"
          >
            <time className="font-mono italic text-black font-semibold">
              2024 - Present
            </time>
            <div className="text-lg font-black text-black">
              Community Trust Building
            </div>
            Going beyond transactions, we focused on building long-term
            relationships by engaging in community events, charity initiatives,
            and exclusive client appreciation programs. We believe that trust is
            earned through consistent actions that reflect care and commitment.
            By actively participating in social causes and fostering a sense of
            community, we deepened our bonds with clients, who saw us not just
            as a luxury real estate provider but as a partner who values their
            trust and contributes positively to society
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Timeline;
