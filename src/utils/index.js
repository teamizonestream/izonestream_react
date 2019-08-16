const getThumbURL = filePath => {
  const videoURL = filePath.replace(
    "/home/choigod1023/IZONE_Media_File/video",
    "https://cdn.izone.kentastudio.com/thumb"
  );
  const extIdx = videoURL.lastIndexOf(".");

  return `${videoURL.substring(0, extIdx)}.png`;
};

const getVideoURL = filePath =>
  filePath.replace(
    "/home/choigod1023/IZONE_Media_File/",
    "https://cdn.izone.kentastudio.com/"
  );

const checkUrlExists = url => {
  const image = new Image();

  image.src = url;

  return image.height !== 0;
};

export { getThumbURL, getVideoURL, checkUrlExists };
