import Image from "components/image/image.component";
import Reveal from "components/toolkit/reveal.component";
import { AnimateType } from "utils/helper/helper";

function PlaceImages() {
  return (
    <Reveal
      type={AnimateType.FadeInLeft}
      className="mt-8 col-span-12 lg:col-span-5 self-start">
      <div className="grid grid-cols-2 gap-3">
        {new Array(4).fill(0).map((_, i) => (
          <Image
            key={i}
            src={`/images/as-${i + 1}.jpg`}
            alt="Places"
            className="rounded-lg"
            width={"100%"}
          />
        ))}
      </div>
    </Reveal>
  );
}

export default PlaceImages;
