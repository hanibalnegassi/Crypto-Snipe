import { Link } from "react-router-dom";
import { socialIcons } from "../../utils/constants";

export default function SocialIcons() {
    return (
    <div className="flex items-center justify-between mx-auto gap-1 lg:gap-3 lg:-mt-2" style={{ maxWidth: 300 }}>
      {socialIcons.map((item, index) => (
        <Link key={index} to={item.url}>
          <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="50%" stopColor="#14FA9B" />
                <stop offset="10%" stopColor="#FFFFFF" />
              </linearGradient>
            </defs>
            <g transform="translate(7 7) scale(0.6)">
              <item.Icon style={{ fill: "url(#iconGradient)" }} />
            </g>
          </svg>
        </Link>
      ))}
    </div>
    )
}