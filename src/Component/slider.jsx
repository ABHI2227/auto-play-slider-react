import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageSlider = () => {
  const [images] = React.useState([
    {
      image:
        "https://pixabay.com/get/g922c52532dafbea6f8c296bf3e672420be1626bd4d492c4429e19b216043bc0ec02a8322bc0e776dc9a76d2f5a1fa733e38291a1ce270ef3a3cf1d5f68ae85dd_1280.jpg",
    },
    {
      image:
        "https://pixabay.com/get/g9aab5678b04141ae296c5ed467649821b13cc2bdaa45b5b73a05c90c341c2d0da241ba5dfe6f7a1e32f53c572ebae82cd3df6d360b68d8a6f041b429b94923b7_1280.jpg",
    },
    {
      image:
        "https://pixabay.com/get/g9aab5678b04141ae296c5ed467649821b13cc2bdaa45b5b73a05c90c341c2d0da241ba5dfe6f7a1e32f53c572ebae82cd3df6d360b68d8a6f041b429b94923b7_1280.jpg",
    },
    {
      image:
        "https://pixabay.com/get/g9aab5678b04141ae296c5ed467649821b13cc2bdaa45b5b73a05c90c341c2d0da241ba5dfe6f7a1e32f53c572ebae82cd3df6d360b68d8a6f041b429b94923b7_1280.jpg",
    },
    {
      image:"https://pixabay.com/get/gda149cde561f91067ab73ecc2fcb17b87be8401d2d28c48460a42f773319982465c4c1458a57636469b4cf60f16ec2f192d54ff23d4dcbd97f647ad83c1ede8c_1280.jpg"
    },
    {
      image:"https://pixabay.com/get/gda149cde561f91067ab73ecc2fcb17b87be8401d2d28c48460a42f773319982465c4c1458a57636469b4cf60f16ec2f192d54ff23d4dcbd97f647ad83c1ede8c_1280.jpg"
    },
    {
      image:"https://pixabay.com/get/gda149cde561f91067ab73ecc2fcb17b87be8401d2d28c48460a42f773319982465c4c1458a57636469b4cf60f16ec2f192d54ff23d4dcbd97f647ad83c1ede8c_1280.jpg"
    }
  ]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((item, index) => (
          <div key={index} className="slider">
            <img
              src={item.image}
              alt={`Slide ${index + 1}`}
              className="slider-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
