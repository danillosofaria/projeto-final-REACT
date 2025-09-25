import "./Header.css";

function Header() {
  return (
    <nav>
      <a href="/" data-discover="true">
        <svg
          width="100"
          height="80"
          viewBox="0 0 200 160"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="30"
            y="20"
            width="140"
            height="100"
            rx="10"
            fill="url(#paint0_linear)"
          />
          <rect
            x="50"
            y="40"
            width="100"
            height="60"
            rx="5"
            fill="#0F1C2E"
          />
          <text
            x="100"
            y="130"
            fontFamily="Arial, sans-serif"
            fontSize="32"
            fontWeight="bold"
            textAnchor="middle"
            fill="url(#paint1_linear)"
          >
            IMTV
          </text>
          <defs>
            <linearGradient
              id="paint1_linear"
              x1="100"
              y1="110"
              x2="100"
              y2="140"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
            </linearGradient>
          </defs>
        </svg>
      </a>
      <ul>
        <li>
          <a href="/movies" data-discover="true">
            <button className="primary">Movies</button>
          </a>
        </li>
        <li>
          <a href="/tv" data-discover="true">
            <button className="secondary">TV</button>
          </a>
        </li>
      </ul>
      <div></div>
    </nav>
  );
}

export default Header;
