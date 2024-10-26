import React from "react";

const DynamicBackground = ({
  imageUrl,
  size,
}: {
  imageUrl: string;
  size: number;
}) => {
  let newURL = imageUrl;

  if (size <= 768) {
    newURL = newURL.replace("large", "small");
  }

  return (
    <div
      className="w-full h-full bg-cover bg-center flex justify-center items-center"
      style={{ backgroundImage: `url(${newURL})` }}
    >
      {newURL}
    </div>
  );
};

export default DynamicBackground;
