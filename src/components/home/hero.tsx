import { AnimateType } from "utils/helper/helper";
import Reveal from "../toolkit/reveal.component";
import HeroSearch from "./hero-search.component";

function LeftHero() {
  return (
    <Reveal
      type={AnimateType.FadeInLeft}
      className=" col-span-12 lg:col-span-7 flex h-full flex-col items-center justify-center py-10 lg:items-start lg:py-20">
      <>
        <h1 className="mb-6 text-center font-display text-4xl font-semibold text-marshland-700 dark:text-white lg:text-left lg:text-6xl">
          Find a place you will love to live!
        </h1>
        <p className="mb-8 text-center text-sm lg:text-lg dark:text-marshland-200 lg:text-left">
          See through the lenses of people who have lived or visited the
          neighbourhood you might have in mind.
        </p>
        <div className="flex flex-col space-y-3 items-center lg:items-start">
          <HeroSearch />
        </div>
      </>
    </Reveal>
  );
}

export default LeftHero;
