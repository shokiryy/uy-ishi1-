import { Button } from "@material-tailwind/react";
import { useState } from "react";

export default function Navabar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="flex justify-between m-8 items-center">
        <div className="logo">
          <img src="/gg.png" alt="logo" className="h-10" />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10">
          <li>Products</li>
          <li>Solutions</li>
          <li>Customers</li>
          <li>Case studies</li>
          <li>Resources</li>
          <li>More</li>
        </ul>

        {/* Google Button */}
        <Button
          size="lg"
          variant="outlined"
          color="blue-gray"
          className="flex items-center gap-3 hidden sm:flex"
        >
          <img
            src="https://docs.material-tailwind.com/icons/google.svg"
            alt="google"
            className="h-6 w-6"
          />
          Continue with Google
        </Button>

        {/* Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 p-6 bg-gray-100">
          <li>Products</li>
          <li>Solutions</li>
          <li>Customers</li>
          <li>Case studies</li>
          <li>Resources</li>
          <li>More</li>
          <Button
            size="lg"
            variant="outlined"
            color="blue-gray"
            className="flex items-center gap-3"
          >
            <img
              src="https://docs.material-tailwind.com/icons/google.svg"
              alt="google"
              className="h-6 w-6"
            />
            Continue with Google
          </Button>
        </div>
      )}
    </div>
  );
}
