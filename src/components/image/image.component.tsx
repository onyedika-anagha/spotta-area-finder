import {
  LazyLoadImage,
  LazyLoadImageProps,
} from "react-lazy-load-image-component";
import placeholder from "../../assets/placeholder.jpg";

function Image({ src, ...props }: LazyLoadImageProps) {
  return (
    <LazyLoadImage
      src={src}
      {...props}
      placeholderSrc={placeholder}
      onError={({ currentTarget }) => {
        currentTarget.onerror = null; // prevents looping
        currentTarget.style.display = "none";
      }}
      // afterLoad={(e) => { console.log(e); }}
    />
  );
}

export default Image;
