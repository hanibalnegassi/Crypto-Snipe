import Box from "@mui/material/Box";
import { useCallback, useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { PiInstagramLogoFill, PiTiktokLogoFill, PiXLogoFill, PiYoutubeLogoFill } from "react-icons/pi";
import { Link, useNavigate } from "react-router-dom";
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import GradientStarIcon from "../../components/gradientstars/GradientStarIcon";
import { addClassNames } from "../../utils/helper";
import AppAccordion from "./AppAccordion";
import { motion } from "framer-motion";
//@ts-ignore
import 'swiper/scss';
//@ts-ignore
import 'swiper/scss/navigation';
//@ts-ignore
import 'swiper/scss/pagination';
import logo from "/assets/logo.png"
import styles from "./welcome.module.scss";
import topBanner from "/assets/banner.png";
import FloatIcons from "./FloatIcons";
import { faq, reviews } from "../../utils/constants";
import KeyFeatures from "./KeyFeatures";
import tradingImage from "/assets/trading.png"

const socialIcons = [
  { Icon: PiYoutubeLogoFill, url: '#' },
  { Icon: PiTiktokLogoFill, url: '#' },
  { Icon: PiXLogoFill, url: '#' },
  { Icon: PiInstagramLogoFill, url: '#' },
  { Icon: FaFacebookF, url: '#' }
];

export default function Landing() {
  const navigate = useNavigate();
  const onSignUp = useCallback(() => navigate('/connect-wallet'), []);
  //@ts-ignore
  const [isHoverTradingImage, setIsHoverTradingImage] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const getStartedBtn = (
    <button
      className="theme_button_danger mx-auto my-1 block"
      style={{
        borderColor: '#14f59e',
        background: '#14f59e1f',
        color: '#14f59e',
      }}
      onClick={onSignUp}
    >
      Connect Wallet
    </button>
  );

  const socialIconsDiv = (
    <div className="flex items-center justify-between mx-auto gap-1 lg:gap-3 lg:-mt-2" style={{ maxWidth: 300 }}>
      {socialIcons.map((item, index) => (
        <Link key={index} to={item.url}>
          <svg width="50" height="50" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="11" fill="green-500" stroke='url(#starGradient)' strokeWidth="1" />
            <g transform="translate(7 7) scale(0.6)" >
              <item.Icon style={{ fill: "white"}} className={styles["socialIcons"]} />
            </g>
          </svg>
        </Link>
      ))}
    </div>
  );

  const handleClickTradingImage = () => {
     setIsHoverTradingImage(true);
  } 
  const handleMouseMove = (e: any) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setPosition({ x, y });
  };
 
  return (
    <>
    <div className={' w-full '}>
    <FloatIcons />
      <div className="justify-center flex">
       <img src={topBanner} className="brightness-25 lg:w-full object fixed h-screen" />
       </div>
      <div className={styles["welcomePage"] + ' w-full h-full relative z-[1] backdrop-blur-xs'}>
        <Box className={addClassNames(styles["top"], "ml-[40px] mr-[40px]")}>
          <div
            className={addClassNames(
              styles["wrapper"],
              "flex pt-9 items-center justify-between"
            )}
          >
            <Link to={"/"} className={" no-underline"}>
              <img src={logo} className="lg:w-70 sm: w-40" />
            </Link>
            <div className="flex items-center space-x-[10px]">
              <button
                className={"theme_button_danger"}
                style={{
                  borderColor: '#14f59e',
                  background: '#14f59e1f',
                  color: '#14f59e',
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
                   <div className="md:text-7xl relative dark:from-white flex gap-3 flex-col dark:to-[#AAAAAA] bg-gradient-to-b from-black/80 to-black bg-clip-text pb-4 text-center font-serif leading-tight text-transparent md:!w-full lg:text-6xl xl:leading-snug sm: text-2xl">
                    <span> 
                      <span className="gradient-text">10x</span> Your Crypto Profits </span>
                    <span>Guaranteed With AI</span></div>
                 <div className="justify-center flex">
                  {getStartedBtn}
                 </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </section>
          <div
      className={`mt-30 mb-14 flex justify-center`}
    >
      
      <div
        className="relative mt-12"
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
            transform: isZoomed ? 'scale(1.5)' : 'scale(1)', // Zoom effect
            transformOrigin: `${position.x}% ${position.y}%`, // Zoom at mouse cursor
            transition: 'transform 0.3s ease',
            objectFit: 'cover',
          }}
        />
        {/* Optional: Add a zoomed preview */}
        {isZoomed && (
          <div
            className="absolute top-0 left-0 w-full h-full bg-cover"
            style={{
              backgroundImage: `url(${tradingImage})`,
              backgroundPosition: `${position.x}% ${position.y}%`, // Center the zoomed area
              backgroundSize: '200%', // Make the zoomed portion larger
              pointerEvents: 'none', // Prevent interaction with the preview
            }}
          />
        )}
      </div>
    </div>
          <center className="sm: mt-0 lg:mt-10">
            <h1 className="font-semibold">
             <span className="gradient-text">Key </span> Features </h1>
          </center>
           <KeyFeatures />
          <section>
            <div className="mt-14 mb-10">
             {getStartedBtn}
            </div>
          <center>
            <h1 className="font-semibold"><span className="gradient-text">See</span> What 20M+ Satisfied Users Are Saying</h1>
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
                    spaceBetween: 20
                  },
                  // when window width is < 1024px
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 10
                  }
                }}
              >
            {reviews.map((x, index) => (
            <SwiperSlide key={index}>
            <motion.div
              className="p-6 rounded-xl border border-gray-700 cursor-grab"
              style={{ minHeight: '220px' }} // Adjust minHeight as per your preference
            >
              <div className="flex flex-col h-full">
                <p className="text-xl font-bold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-white via-white">
                  {x.name}
                </p>
                <p className="text-gray-200 leading-relaxed flex-grow">{x.description}</p>
                <div className="flex space-x-1">
                <div className={"flex" }>
                        {Array.from({ length: x.stars }, () => 0)
                          .map((_, index) => <GradientStarIcon key={index} />)}
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
          <div className="mt-14">
           {getStartedBtn}
          </div>
          <center>
            <h1 className="font-semibold"><span className="gradient-text">Frequently</span> Asked Questions</h1>
          </center>

          <div className={addClassNames(
            styles["app-accordion"], "mx-[70px]")}>
            <AppAccordion items={faq} />
          </div>

          <button
            className="theme_button_danger block m-auto my-9"
            style={{
              borderColor: '#14f59e',
              background: '#14f59e1f',
              color: '#14f59e',
            }}
            onClick={onSignUp}
          >
            CONNECT WALLET
          </button>

          <center>
            <h1 className="font-semibold"><span className="gradient-text">Connect</span> With Us</h1>
          </center>
          <div className={addClassNames(
            styles["footer-hme"], "flex justify-between items-center gap-4")}
          >
            {/* Only Mobile */}
            <div className="block md:hidden text-center">
              {socialIconsDiv}
            </div>
            <div className="flex-none w-[285px] text-center">
              <p>© 2025 CryptoSnipe All rights reserved.</p>
            </div>

            {/* Not Mobile */}
            <div className="hidden md:block">
              {socialIconsDiv}
            </div>

            <div className="flex-none w-[285px] text-center">
              <Link to='/privacy-policy'>Privacy policy</Link>
              &nbsp;&nbsp;&nbsp;
              <Link to='/terms-service'>Terms of service</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
