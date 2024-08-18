import SMB from "./assets/ProjectsImgs/SMB.jpg";
import Hotstar from "./assets/ProjectsImgs/Hotstar.jpg";
import Insta from "./assets/ProjectsImgs/Insta.png";
const Projects = () => {
  return (
    <div className="max-w-5xl overflow-x-hidden">
      <div>
        <h2 className="text-lg font-bold text-center mb-8">Projects</h2>
      </div>
      <div className="w-full ">
        <div className="flex overflow-x-auto space-x-5 p-4 snap-x snap-mandatory scroll-px-4 no-scrollbar">
          <div className="border rounded-md w-64 md:w-72 p-4 text-center flex-shrink-0 snap-start transition-transform duration-300 ease-in-out flex justify-center flex-col">
            <img src={SMB} alt="" className="h-32" />
            <h3 className="my-5 text-base font-semibold">
              Smart Mailbox: A Solution to Mitigate Package Theft
            </h3>

            <a
              href="https://www.behance.net/gallery/186554053/Smart-Mailbox-A-Solution-to-Mitigate-Package-Theft"
              target={"_blank"}
            >
              <button className="text-xs font-light uppercase bg-red-500 text-white px-6 py-3">
                View Project
              </button>
            </a>
          </div>

          <div className="border rounded-md w-64 md:w-72 p-4 text-center flex-shrink-0 snap-start transition-transform duration-300 ease-in-out flex justify-center flex-col">
            <img src={Hotstar} alt="" className="h-32" />
            <h3 className="my-5 text-base font-semibold">
              Hotstar Party: Watch Online With Your Friends
            </h3>

            <a
              href="https://www.behance.net/gallery/138336313/Hotstar-Party-Case-Study"
              target={"_blank"}
            >
              <button className="text-xs font-light uppercase bg-red-500 text-white px-6 py-3">
                View Project
              </button>
            </a>
          </div>

          <div className="border rounded-md w-64 md:w-72 p-4 text-center flex-shrink-0 snap-start transition-transform duration-300 ease-in-out flex justify-center flex-col">
            <img src={Insta} alt="" className="h-32" />
            <h3 className="my-5 text-base font-semibold">
              Instagram Premium: Ad-Free Social Interaction
            </h3>

            <a
              href="https://www.behance.net/gallery/150746247/Instagram-Premium"
              target={"_blank"}
            >
              <button className="text-xs font-light uppercase bg-red-500 text-white px-6 py-3">
                View Project
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
