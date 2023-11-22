const options = {
    className: "image-viewer",
    toolbar: 2,
    title: [2, (image, imageData) => `${image.alt} (${imageData.naturalWidth}px × ${imageData.naturalHeight}px)`]
};
export default options;

