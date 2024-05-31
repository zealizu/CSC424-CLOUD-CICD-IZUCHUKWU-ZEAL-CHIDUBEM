import Carousel from "react-multi-carousel";

const CustomSlider = ({ children, itemCount = 4 }) => {
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: itemCount,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 2,
      partialVisibilityGutter: 30,
    },
  };
  return (
    <>
      <Carousel responsive={responsive} className="py-5">
        {children}
      </Carousel>
    </>
  );
};
export default CustomSlider;
