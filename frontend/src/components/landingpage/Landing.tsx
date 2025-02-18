import Box from "@mui/material/Box";
import { useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import GradientStarIcon from "../../components/gradientstars/GradientStarIcon";
import { addClassNames } from "../../utils/helper";
import AppAccordion from "./AppAccordion";
import { motion } from "framer-motion";
// @ts-ignore
import "swiper/scss";
// @ts-ignore
import "swiper/scss/navigation";
// @ts-ignore
import "swiper/scss/pagination";
import logo from "/assets/logo.png";
import styles from "./welcome.module.scss";
import topBanner from "/assets/banner.png";
import FloatIcons from "./FloatIcons";
import { faq, reviews } from "../../utils/constants";
import KeyFeatures from "./KeyFeatures";
import tradingImage from "/assets/trading.png";
import NvidiaSvg from "./NvidiaSvg";
import SocialIcons from "./Socialcons";

export default function Landing() {
  const navigate = useNavigate();
  const onSignUp = useCallback(() => navigate("/connect-wallet"), []);
  // @ts-ignore
  const [isHoverTradingImage, setIsHoverTradingImage] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const getStartedBtn = (
    <button
      className="theme_button_danger mx-auto my-1 block"
      style={{
        borderColor: "#14f59e",
        background: "#14f59e1f",
        color: "#14f59e",
      }}
      onClick={onSignUp}
    >
      Connect Wallet
    </button>
  );

  const handleClickTradingImage = () => {
    setIsHoverTradingImage(true);
  };

  const handleMouseMove = (e: any) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setPosition({ x, y });
  };

  return (
    <>
      <div className={"w-full"}>
        <FloatIcons />
        <div className="justify-center flex">
          <img
            src={topBanner}
            className="brightness-25 lg:w-full object fixed h-screen"
          />
        </div>
        <div
          className={
            styles["welcomePage"] +
            " w-full h-full relative z-[1] backdrop-blur-xs"
          }
        >
          <Box className={addClassNames(styles["top"], "ml-[40px] mr-[40px]")}>
            <div
              className={addClassNames(
                styles["wrapper"],
                "flex pt-9 items-center justify-between"
              )}
            >
              <Link to={"/"} className={"no-underline"}>
                <img src={logo} className="lg:w-70 sm: w-40" />
              </Link>
              <div className="flex items-center space-x-[10px]">
                <button
                  className={"theme_button_danger"}
                  style={{
                    borderColor: "#14f59e",
                    background: "#14f59e1f",
                    color: "#14f59e",
                  }}
                  onClick={() => navigate("/connect-wallet")}
                >
                  Connect Wallet
                </button>
              </div>
            </div>
          </Box>

          <div className={styles["middle-text-section"]}>
            <section className="mb-[-40px] sm: mt-20 lg:mt-14">
              <div className={styles["middle-text-innersecton"]}>
                <Swiper
                  spaceBetween={30}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
                  className={`font-semibold cursor-grab`}
                >
                  <SwiperSlide className="flex flex-col items-center justify-center">
                    <div className="md:text-7xl relative dark:from-white flex gap-3 flex-col dark:to-[#AAAAAA] bg-gradient-to-b from-black/80 to-black bg-clip-text pb-4 text-center font-bold leading-tight text-transparent md:!w-full lg:text-6xl xl:leading-snug sm: text-3xl">
                      <span>
                        <span>10x</span> Your Crypto
                        Profits
                      </span>
                      <span>Guaranteed With AI</span>
                    </div>
                    <div className="flex justify-center items-center gap-1">
                      <span className="lg:text-2xl sm: text-md">Powered By</span>
                      <div className="mt-1 flex gap-1 items-center">
                        <NvidiaSvg height="39px" width="45px" />
                        <span className="lg:text-xl sm: text-md">NVIDIA</span>
                      </div>
                    </div>
                    <div className="justify-center flex lg:mt-10 sm: mt-5">{getStartedBtn}</div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </section>
            <div className="lg:mt-22 sm: mt-20 justify-center flex items-center flex-col lg:gap-6">
              <div className="flex items-center gap-2">
                <span className="lg:text-5xl sm: text-2xl font-bold"  style={{ color: "white" }}>
                  In Partnership 
                </span>
                <span className="lg:text-5xl sm: text-xl font-bold" style={{ color: "white" }}>With</span>
                <div className="sm: hidden lg:block">
                 <NvidiaSvg width="62px" height="62px" />
                </div>
                <div className="lg:hidden">
                <NvidiaSvg width="32px" height="32px" />
                </div>
                <span className="font-bold lg:text-5xl sm: text-xl" style={{ color: "white" }}>NVIDIA</span>
              </div>
              <div className="flex justify-center m-12 mt-[30px]">
                <p className="lg:text-2xl sm: text-sm text-gray-300">
                  <div className="font-bold flex items-center gap-2"> <div className="sm: hidden lg:block"><NvidiaSvg width="50px" height="50px" /> </div> <div className="lg:hidden"><NvidiaSvg width="30px" height="30px" /></div> <span className="sm: text-md lg:text-xl" >NVIDIA</span></div> - We
                  partnered with Crypto Snipe to revolutionize crypto trading! Our
                  advanced AI technology and powerful GPUs will significantly
                  enhance Crypto Snipe's trading algorithms, making them even more
                  efficient and effective. This partnership leads to faster, more
                  accurate trades, and guaranteed higher profits for users.
                </p>
              </div>
            </div>
            <div className={`mb-14 flex justify-center`}>
              <div
                className="relative lg:mt-12"
                onMouseMove={handleMouseMove} // Track mouse position over the image
              >
                <img
                  src={tradingImage}
                  className="rounded-3xl cursor-pointer transition-transform duration-300"
                  onClick={() => {
                    setIsZoomed(!isZoomed); // Toggle zoom on click
                    handleClickTradingImage(); // Call the original handler
                  }}
                  style={{
                    transform: isZoomed ? "scale(1.5)" : "scale(1)", // Zoom effect
                    transformOrigin: `${position.x}% ${position.y}%`, // Zoom at mouse cursor
                    transition: "transform 0.3s ease",
                    objectFit: "cover",
                  }}
                />
                {/* Optional: Add a zoomed preview */}
                {isZoomed && (
                  <div
                    className="absolute top-0 left-0 w-full h-full bg-cover"
                    style={{
                      backgroundImage: `url(${tradingImage})`,
                      backgroundPosition: `${position.x}% ${position.y}%`, // Center the zoomed area
                      backgroundSize: "200%", // Make the zoomed portion larger
                      pointerEvents: "none", // Prevent interaction with the preview
                    }}
                  />
                )}
              </div>
            </div>
            <div className="mt-14 mb-10">{getStartedBtn}</div>
            <center className="sm: mt-0 lg:mt-10">
              <h1 className="font-bold text-white">
                Key Features
              </h1>
            </center>
            <KeyFeatures />
            <section>
              <div className="mt-14 mb-10">{getStartedBtn}</div>
              <center>
                <h1 className="font-bold">
                  See What 20M+ Satisfied
                  Users Are Saying
                </h1>
              </center>
              <div className="">
                <Swiper
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  slidesPerView={3}
                  modules={[Autoplay]}
                  breakpoints={{
                    // when window width is >= 1024px (lg)
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    },
                    // when window width is < 1024px
                    0: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                  }}
                >
                  {reviews.map((x, index) => (
                    <SwiperSlide key={index}>
                      <motion.div
                        className="p-6 rounded-xl border border-gray-700 cursor-grab"
                        style={{ minHeight: "220px" }} // Adjust minHeight as per your preference
                      >
                        <div className="flex flex-col h-full">
                          <p className="text-xl font-bold mb-3 bg-clip-text text-white">
                            {x.name}
                          </p>
                          <p className="text-gray-200 leading-relaxed flex-grow">
                            {x.description}
                          </p>
                          <div className="flex space-x-1">
                            <div className={"flex"}>
                              {Array.from({ length: x.stars }, () => 0).map(
                                (_, index) => (
                                  <GradientStarIcon key={index} />
                                )
                              )}
                            </div>
                          </div>
                          <div className="mt-4">
                            <div className="h-1 w-12 bg-gradient-to-r from-green-500 to-white rounded"></div>
                          </div>
                        </div>
                      </motion.div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </section>
            <div className="mt-14">{getStartedBtn}</div>
            <center>
              <h1 className="font-bold ">
               Frequently Asked Questions
              </h1>
            </center>
            <div
              className={addClassNames(
                styles["app-accordion"],
                "mx-[70px]"
              )}
            >
              <AppAccordion items={faq} />
            </div>
            <button
              className="theme_button_danger block m-auto my-9"
              style={{
                borderColor: "#14f59e",
                background: "#14f59e1f",
                color: "#14f59e",
              }}
              onClick={onSignUp}
            >
              Connect Wallet
            </button>
            <center>
              <h1 className="font-bold">
                Connect With Us
              </h1>
            </center>
            <div
              className={addClassNames(
                styles["footer-hme"],
                "flex justify-between items-center gap-4"
              )}
            >
              <div className="flex-none w-[285px] text-center">
                <p>© 2025 CryptoSnipe All rights reserved.</p>
              </div>
              <div>
                <SocialIcons />
              </div>
              <div className="flex-none w-[285px] text-center">
                <Link to="/privacy-policy">Privacy policy</Link>
                &nbsp;&nbsp;&nbsp;
                <Link to="/terms-service">Terms of service</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}