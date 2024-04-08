import { alertMessage } from "components/toolkit/initial-state.component";

export const longEnUSFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: false,
});
export const greeting = (firstName: string) => {
    var nowTime = new Date();
    const hour = nowTime.getHours();

    //   console.log(nowTime);
    if (hour >= 20) {
      return `Good Night ${firstName}  , Have a good night rest.`;
    } else if (hour > 17) {
      return `Good Evening ${firstName} , Hope you enjoyed your day?`;
    } else if (hour > 11) {
      return `Good Afternoon ${firstName} , How is your day going?`;
    } else if (hour < 12) {
      return `Good Morning ${firstName} , How was your night?`;
    }
  },
  truncateStr = (str = "", MAX = 20) => {
    const truncatedStr = str.substring(0, MAX);
    return str.length > MAX ? truncatedStr + "..." : truncatedStr;
  };

export const slugify = (str: string) =>
  str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/[\s_-]+/g, "-")
    .replace(/^-+|-+$/g, "");

export const makeId = (length = 12) => {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789JKLMNOPQRSTUVWXYZ0123456789JKLMNOPQRSTUVWXYZ0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  },
  classNames = (...classes: any[]) => {
    return classes.filter(Boolean).join(" ");
  };

export type Reviews = Review[];

export interface Review {
  name: string;
  amenities: string;
  rating: string;
  review: string;
  createdAt: string;
  id?: string;
  area_id: string;
  image: string;
}
export type PlaceLocation = {
  id: string;
  name: string;
  tags: string;
  slug: string;
  image: string;
};

export interface ReviewFormData {
  name: string;
  amenities: string;
  rating: string;
  review: string;
  area_id: string;
  createdAt?: string;
}

export enum Language {
  Empty = "*",
}
export enum AnimateType {
  SlideInLeft = "slideInLeft",
  SlideInRight = "slideInRight",
  SlideInTop = "slideInTop",
  SlideInDown = "slideInDown",
  FadeInLeft = "fadeInLeft",
  FadeInRight = "fadeInRight",
  FadeInUp = "fadeInUp",
  FadeInDown = "fadeInDown",
  BounceIn = "bounceIn",
  ZoomIn = "zoomIn",
}

export const animate_animation = (animate: AnimateType) => {
  switch (animate) {
    case AnimateType.FadeInLeft:
      return {
        hidden: { opacity: 0, x: -75 },
        visible: { opacity: 1, x: 0 },
      };
    case AnimateType.FadeInRight:
      return {
        hidden: { opacity: 0, x: 75 },
        visible: { opacity: 1, x: 0 },
      };
    case AnimateType.FadeInDown:
      return {
        hidden: { opacity: 0, y: -75 },
        visible: { opacity: 1, y: 0 },
      };
    case AnimateType.FadeInUp:
      return {
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      };
    default:
      return {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      };
  }
};
export const truncateEmail = (email = "") => {
    return (
      email.substring(0, 3) +
      "..." +
      email.substring(email.indexOf("@"), email.length)
    );
  },
  stringToArray = (inputString: string): string[] => {
    // Split the input string by commas and trim whitespace from each element
    const array = inputString.split(",").map((item) => item.trim());
    return array;
  },
  extractFirstWords = (inputString: string): string => {
    const words = inputString.trim().split(" ");
    let result = words[0]; // Get the first word
    if (words.length > 1) {
      result += " " + words[1].charAt(0) + "."; // Add the first character of the second word with a period
    }
    return result;
  },
  capitalize = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  },
  shareLink = (copyText: string, title: string) => {
    const _BASE_URL = "https://spotta-area-finder.netlify.com";
    const uri = _BASE_URL + copyText;
    //
    if (navigator.share) {
      navigator
        .share({
          title: title,
          url: uri,
        })
        .then(() => {
          console.log("Thanks for sharing!");
        })
        .catch(console.error);
    } else {
      navigator.clipboard.writeText(uri).then(() => {
        alertMessage("success", "Link Copied");
      });
    }
  },
  arrangeReviewsByCreatedAtDesc = (reviews: Reviews): Reviews => {
    // Convert createdAt strings to Date objects for proper sorting
    const reviewsWithDate = reviews;
    // Sort the array by createdAt in descending order
    reviewsWithDate.sort((a, b) => {
      return (
        new Date(b.createdAt.replace(" at ", " ")).getTime() -
        new Date(a.createdAt.replace(" at ", " ")).getTime()
      );
    });

    // Return the sorted array
    return reviewsWithDate;
  };
