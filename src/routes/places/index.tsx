import Image from "components/image/image.component";
import Reveal from "components/toolkit/reveal.component";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectReviews } from "store/reviews/review.selector";
import { AnimateType, PlaceLocation, stringToArray } from "utils/helper/helper";
import { locations } from "utils/helper/states";

function Places() {
  const reviews = useSelector(selectReviews),
    getReviews = (location: PlaceLocation) => {
      return reviews == null
        ? 0
        : reviews.filter((review) => review.area_id === location.id).length;
    };
  return (
    <main className="main">
      <div className="bg-blueGray-300">
        <div className="py-12">
          <div className="mb-12 flex flex-wrap -mx-4 justify-center">
            <div className="px-4 relative w-full lg:w-8/12 text-center">
              <span className="text-blueGray-500 bg-blueGray-100 text-xs font-bold inline-block py-1 uppercase uppercase last:mr-0 mr-1 leading-tight rounded px-2">
                Endless story
              </span>
              <h3 className="text-3xl font-bold mt-3 mb-1 ">
                Everything started in this neighborhood
              </h3>
              <p className="mt-2 mb-4 text-xl leading-relaxed  opacity-75">
                We've got the same blood in our veins, and we'll be brothers
                until death will tear us apart, and this is cause nobody could
                ever separate us.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-4">
            {locations.map((place) => (
              <Reveal
                type={AnimateType.FadeInRight}
                className="px-4 relative w-full lg:w-4/12 w-full md:w-6/12"
                key={place.id}>
                <div className="shadow-lg rounded-lg relative flex flex-col min-w-0 break-words bg-white dark:bg-[#18181B] w-full mb-6">
                  <div className="relative">
                    <Link to={`/place/${place.slug}`}>
                      <Image
                        alt="..."
                        className="w-full flex-shrink-0 rounded-t-lg"
                        src={place.image}
                        width={"100%"}
                      />
                    </Link>
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="block w-full absolute text-white dark:text-[#18181B]"
                      style={{ height: 95, bottom: -1 }}>
                      <polygon
                        points="583,55 583,95 0,95"
                        style={{ fill: "currentcolor" }}
                      />
                    </svg>
                  </div>
                  <div className="px-4 py-5 flex-auto">
                    <Link
                      to={`/place/${place.slug}`}
                      className="text-sm text-blueGray-400 font-bold uppercase">
                      {place.name}
                    </Link>
                    <div className="text-xs font-bold mt-1 mb-5">
                      “{getReviews(place)}” Reviews
                    </div>
                    <div className="flex flex-wrap gap-2 w-full mt-2">
                      {stringToArray(place.tags).map((tag, i) => (
                        <span
                          key={i}
                          className="bg-blue-100 capitalize text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default Places;
