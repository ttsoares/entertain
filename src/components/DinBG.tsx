// import bookMarkEmpty from "/images/icon-bookmark-empty.svg";

const DynamicBackground = ({
  imageUrl,
  size,
  bookmaked,
  toggleBookMark,
}: {
  imageUrl: string;
  size: number;
  bookmaked: boolean;
  toggleBookMark: () => void;
}) => {
  let newURL = imageUrl;

  if (size <= 768) {
    newURL = newURL.replace("large", "small");
  }

  return (
    <div
      className="w-full h-full bg-cover bg-center flex justify-center items-center relative"
      style={{ backgroundImage: `url(${newURL})` }}
    >
      <svg
        onClick={toggleBookMark}
        className={`${
          bookmaked ? "fill-white" : "fill-none"
        } stroke-white stroke-2 bg-cuins rounded-full p-3 w-10 h-10 top-6 right-12 absolute hover:bg-white hover:stroke-cuins cursor-pointer`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
          stroke-width="1.5"
        />
      </svg>
    </div>
  );
};

export default DynamicBackground;
