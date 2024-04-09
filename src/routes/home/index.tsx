import LeftHero from "components/home/hero";
import RightHeroReviews from "components/home/reviews";

export default function Home() {
  return (
    <main className="min-h-screen main">
      <div className="ml-auto mr-auto h-full px-4">
        <div className="grid h-full items-center gap-4 lg:grid-cols-12 mb-4">
          <LeftHero />
          <RightHeroReviews />
        </div>
      </div>
    </main>
  );
}
