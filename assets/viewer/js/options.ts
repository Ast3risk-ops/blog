const options = {
    className: "image-viewer",
    toolbar: 2,
    title: [2, (image, imageData) => `Image size: ${imageData.naturalWidth}px × ${imageData.naturalHeight}px`]
};
export default options;

