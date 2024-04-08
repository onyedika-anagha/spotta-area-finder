import PlaceNotFound from "components/places/not-found.component";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectReviews } from "store/reviews/review.selector";
import { locations } from "utils/helper/states";
import PlaceHeader from "components/places/header.component";
import PlaceDetailsBody from "components/places/body.component";

function PlaceDetails() {
  const { slug } = useParams();
  const location = locations.find((l) => l.slug === slug);
  const allReviews = useSelector(selectReviews);

  if (location == null) return <PlaceNotFound />;

  const reviews = allReviews?.filter(
    (review) => review.area_id === location.id
  );
  return (
    <main>
      <PlaceHeader {...{ location, reviews }} />
      <PlaceDetailsBody {...{ location, reviews }} />
    </main>
  );
}

export default PlaceDetails;
