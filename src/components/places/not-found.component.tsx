import emptySvg from "assets/empty.svg";

function PlaceNotFound() {
  return (
    <main className="flex flex-col gap-3 h-screen w-full items-center justify-center p-4">
      <img
        src={emptySvg}
        alt="empty icon"
      />
      <span>Oops! The place was not found.</span>
    </main>
  );
}

export default PlaceNotFound;
