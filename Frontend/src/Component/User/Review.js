import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userReviewsView } from "../../store/action/user.action";

const Review = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: "numeric", month: "long", day: "2-digit" };
    return date.toLocaleDateString("en-US", options);
  };
  //console.log(userHomeSubservice, "jujuj");
  console.log(data, "dataa--");

  useEffect(() => {
    dispatch(userReviewsView());
  }, [dispatch]);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 ${
            i >= rating + 1 ? "text-gray-400" : "text-yellow-300"
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <>
      <section className="container mx-auto p-10s md:py-12 px-0 md:p-8 md:px-0">
        <h2 className="mb-4 text-center text-3xl text-[#344955] font-Courier New font-bold italic md:mb-8 lg:text-4xl">
          What customers say
        </h2>
        {data?.userReviewsView?.data?.reviews.length > 1 ? (
          <Slider {...settings}>
            {data?.userReviewsView?.data?.reviews.map((res) => (
              <div key={res.id} className="p-4">
                <div
                  className="bg-[#fcfcff] p-[10px] rounded-[5px] h-[100%] text-center transform duration-500 hover:-translate-y-2 cursor-pointer"
                  style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
                >
                  <div className="space-x-1 flex justify-center">
                    <h1 className="text-[24px] font-bold text-[#344955]">
                      {res.name}
                    </h1>
                  </div>

                  <div className="-ml-1 flex gap-0.5 justify-center">
                    {renderStars(res.starRating)}
                  </div>
                  <p className="mb-2 text-[18px] text-gray-700 overflow-hidden">
                    {formatDate(res.createdAt)}
                  </p>
                  <p className="font-normal text-[#344955] transition duration-100 overflow-hidden">
                    {res.comment}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        ) : (
          data?.userReviewsView?.data?.reviews.map((res) => (
            <div key={res.id} className="p-4">
              <div
                className="bg-[#fcfcff] p-[10px] rounded-[5px] h-[100%] text-center transform duration-500 hover:-translate-y-2 cursor-pointer"
                style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px" }}
              >
                <div className="space-x-1 flex justify-center">
                  <h1 className="text-[24px] font-bold text-[#344955]">
                    {res.name}
                  </h1>
                </div>

                <div className="-ml-1 flex gap-0.5 justify-center">
                  {renderStars(res.starRating)}
                </div>
                <p className="mb-2 text-[18px] text-gray-700 overflow-hidden">
                  {formatDate(res.createdAt)}
                </p>
                <p className="font-normal text-[#344955] transition duration-100 overflow-hidden">
                  {res.comment}
                </p>
              </div>
            </div>
          ))
        )}
      </section>
    </>
  );
};

export default Review;
