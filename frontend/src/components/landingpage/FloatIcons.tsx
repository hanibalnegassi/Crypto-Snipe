
import { motion } from "framer-motion";
import baseLogo from "/assets/base.png"
const FloatIcons = () => {
  return (  
 <div>   
  <motion.div className="flex justify-between absolute">
  <svg width="800px" viewBox="0.004 0 64 64" xmlns="http://www.w3.org/2000/svg"></svg>
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className="lg:block lg:size-180 sm: size-6 lg:top-[135px] absolute sm: top-[70px] transform translate-x-5/4 sm: right-16"
      animate={{
        y: [0, -5, 0]
     }}
      transition={{
        duration: 2,  
        ease: "easeInOut", 
        repeat: Infinity,
        repeatType: "mirror",
      }}
      style={{ zIndex: 10, filter: `drop-shadow(0px 2px 20px rgba(0, 123, 255, 0.9))` }}
    >
      
<g fill="none" fillRule="evenodd">

<circle cx="16" cy="16" r="16" fill="#627EEA"/>

<g fill="#FFF" fillRule="nonzero">

<path fillOpacity=".602" d="M16.498 4v8.87l7.497 3.35z"/>

<path d="M16.498 4L9 16.22l7.498-3.35z"/>

<path fillOpacity=".602" d="M16.498 21.968v6.027L24 17.616z"/>

<path d="M16.498 27.995v-6.028L9 17.616z"/>

<path fillOpacity=".2" d="M16.498 20.573l7.497-4.353-7.497-3.348z"/>

<path fillOpacity=".602" d="M9 16.22l7.498 4.353v-7.701z"/>

</g>

</g>
    </motion.svg>
    
    <style>{`
        .st0 {
          fill: #6FBCF0;
        }
        .st1 {
          fill-rule:evenodd;
          clip-rule:evenodd;
          fill: #FFFFFF;
          stroke: #FFFFFF;
          stroke-width: 5.8052;
          stroke-opacity: 0;
        }
      `}</style>
    <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          className="lg:block size-11 sm:block absolute lg:top-[320px] sm:top-[150px] lg:left-[150px] sm:right-[60px] transition-all duration-300 ease-in-out"
          animate={{
            y: [0, -10, 0], // Animation effect for floating
          }}
          style={{ zIndex: 10, filter: `drop-shadow(0 2px 20px rgba(247, 147, 26, 0.9))` }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        >
          <circle className="st0" cx="128" cy="128" r="128" fill="#6FBCF0" />
          <path
            className="st1"
            d="M66.6,194.6c12.8,22.2,35.8,35.5,61.4,35.5c25.6,0,48.6-13.3,61.4-35.5c12.8-22.2,12.8-48.7,0-70.9l-54-93.6c-3.3-5.7-11.5-5.7-14.8,0l-54,93.6C53.7,145.9,53.7,172.4,66.6,194.6L66.6,194.6z M112.8,74.6l11.5-20c1.6-2.8,5.8-2.8,7.4,0l44.3,76.8c8.1,14.1,9.7,30.4,4.6,45.4c-0.5-2.4-1.3-4.9-2.3-7.4c-6.1-15.5-20-27.4-41.2-35.4c-14.6-5.5-23.9-13.7-27.6-24.2C104.7,96.2,109.8,81.4,112.8,74.6L112.8,74.6z M93.1,108.6L80,131.4c-10,17.4-10,38.1,0,55.5c10,17.4,28,27.7,48,27.7c13.3,0,25.7-4.6,35.5-12.7c1.3-3.2,5.2-14.9,0.3-27c-4.5-11.2-15.3-20.1-32.2-26.5c-19-7.2-31.4-18.5-36.8-33.5C94.1,112.8,93.6,110.7,93.1,108.6z"
            fill="#FFFFFF"
          />
    </motion.svg>
    <motion.svg   className="lg:block sm: size-6 lg:size-15 absolute lg:top-[145px] sm: top-[70px] lg:right-[614px] sm: right-16" width="51px" height="51px" viewBox="-7.04 -7.04 78.08 78.08" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000" strokeWidth="0.00064"  
  animate={{
        y: [0, -5, 0]
     }}
      transition={{
        duration: 2,  
        ease: "easeInOut", 
        repeat: Infinity,
        repeatType: "mirror",
      }}
      style={{ zIndex: 10, filter: `drop-shadow(0 2px 20px rgba(247, 147, 26, 0.9))` }}
      >

<g id="SVGRepo_bgCarrier" strokeWidth="0"/>

<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.256"/>

<g id="SVGRepo_iconCarrier">

<path d="M63.04 39.741c-4.274 17.143-21.638 27.575-38.783 23.301C7.12 58.768-3.313 41.404.962 24.262 5.234 7.117 22.597-3.317 39.737.957c17.144 4.274 27.576 21.64 23.302 38.784z" fill="#f7931a"/>

<path d="M46.11 27.441c.636-4.258-2.606-6.547-7.039-8.074l1.438-5.768-3.512-.875-1.4 5.616c-.922-.23-1.87-.447-2.812-.662l1.41-5.653-3.509-.875-1.439 5.766c-.764-.174-1.514-.346-2.242-.527l.004-.018-4.842-1.209-.934 3.75s2.605.597 2.55.634c1.422.355 1.68 1.296 1.636 2.042l-1.638 6.571c.098.025.225.061.365.117l-.37-.092-2.297 9.205c-.174.432-.615 1.08-1.609.834.035.051-2.552-.637-2.552-.637l-1.743 4.02 4.57 1.139c.85.213 1.683.436 2.502.646l-1.453 5.835 3.507.875 1.44-5.772c.957.26 1.887.5 2.797.726L27.504 50.8l3.511.875 1.453-5.823c5.987 1.133 10.49.676 12.383-4.738 1.527-4.36-.075-6.875-3.225-8.516 2.294-.531 4.022-2.04 4.483-5.157zM38.087 38.69c-1.086 4.36-8.426 2.004-10.807 1.412l1.928-7.729c2.38.594 10.011 1.77 8.88 6.317zm1.085-11.312c-.99 3.966-7.1 1.951-9.083 1.457l1.748-7.01c1.983.494 8.367 1.416 7.335 5.553z" fill="#ffffff"/>

</g>

</motion.svg>
    </motion.div>  
    <motion.svg
       width="800px" height="800px" viewBox="0 0 32 32" id="_x3C_Layer_x3E_" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
      className="lg:block lg:size-12 sm: size-6 absolute rounded-full lg:top-[470px] lg:right-[355px] sm: top-[300px] sm: right-10"
      animate={{
        y: [0, -5, 0]
     }}
      transition={{
        duration: 2,  
        ease: "easeInOut", 
        repeat: Infinity,
        repeatType: "mirror",
      }}
      style={{
        zIndex: 10,
        filter: `drop-shadow(0 0 10px rgba(173, 216, 230, 0.8)) drop-shadow(0 2px 20px rgba(173, 216, 230, 0.6))`,
      }}
    >
    <g id="SVGRepo_bgCarrier" stroke-width="0"/>
    
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
    
    <g id="SVGRepo_iconCarrier"> <g fill="none"> <circle fill="#677ff9" cx="16" cy="16" r="16"/> <path d="M9.925 19.687a.59.59 0 01.415-.17h14.366a.29.29 0 01.207.497l-2.838 2.815a.59.59 0 01-.415.171H7.294a.291.291 0 01-.207-.498l2.838-2.815zm0-10.517A.59.59 0 0110.34 9h14.366c.261 0 .392.314.207.498l-2.838 2.815a.59.59 0 01-.415.17H7.294a.291.291 0 01-.207-.497L9.925 9.17zm12.15 5.225a.59.59 0 00-.415-.17H7.294a.291.291 0 00-.207.498l2.838 2.815c.11.109.26.17.415.17h14.366a.291.291 0 00.207-.498l-2.838-2.815z" fill="#FFF"/> </g> </g>
    </motion.svg>
    <motion.svg
       width="800px" height="800px" viewBox="0 0 32 32" id="_x3C_Layer_x3E_" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
      className="lg:block lg:size-12 sm: size-6 absolute rounded-full lg:top-[350px] lg:right-[265px] sm: top-[300px] sm: right-10"
      animate={{
        y: [0, -5, 0]
     }}
      transition={{
        duration: 2,  
        ease: "easeInOut", 
        repeat: Infinity,
        repeatType: "mirror",
      }}
      style={{
        zIndex: 10,
        filter: `drop-shadow(0 0 10px rgba(128, 0, 128, 0.8)) drop-shadow(0 2px 20px rgba(128, 0, 128, 0.6))`,
      }}      
    >
    <g fill="none">
    
    <circle fill="#6F41D8" cx="16" cy="16" r="16"/>
    
    <path d="M21.092 12.693c-.369-.215-.848-.215-1.254 0l-2.879 1.654-1.955 1.078-2.879 1.653c-.369.216-.848.216-1.254 0l-2.288-1.294c-.369-.215-.627-.61-.627-1.042V12.19c0-.431.221-.826.627-1.042l2.25-1.258c.37-.216.85-.216 1.256 0l2.25 1.258c.37.216.628.611.628 1.042v1.654l1.955-1.115v-1.653a1.16 1.16 0 00-.627-1.042l-4.17-2.372c-.369-.216-.848-.216-1.254 0l-4.244 2.372A1.16 1.16 0 006 11.076v4.78c0 .432.221.827.627 1.043l4.244 2.372c.369.215.849.215 1.254 0l2.879-1.618 1.955-1.114 2.879-1.617c.369-.216.848-.216 1.254 0l2.251 1.258c.37.215.627.61.627 1.042v2.552c0 .431-.22.826-.627 1.042l-2.25 1.294c-.37.216-.85.216-1.255 0l-2.251-1.258c-.37-.216-.628-.611-.628-1.042v-1.654l-1.955 1.115v1.653c0 .431.221.827.627 1.042l4.244 2.372c.369.216.848.216 1.254 0l4.244-2.372c.369-.215.627-.61.627-1.042v-4.78a1.16 1.16 0 00-.627-1.042l-4.28-2.409z" fill="#FFF"/>
    </g>
    </motion.svg>
    <motion.img
          src={baseLogo}
          className="lg:block lg:size-12 sm: size-6 sm: top-35 absolute lg:top-[452px] lg:left-[200px]  rounded-full sm:left-20"
          animate={{
            y: [0, -10, 0],
          }}
          style={{ zIndex: 10, filter: `drop-shadow(0 2px 20px rgba(247, 147, 26, 0.9))` }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "mirror",
          }}
        >
    </motion.img>
    </div>
  );
};

export default FloatIcons;
