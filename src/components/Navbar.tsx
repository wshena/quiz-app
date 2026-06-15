import Logo from "./Logo";
import { Link, useLocation } from "react-router-dom";
import ContentContainer from "./container/ContentContainer";
import { ExploreIcon } from "./Icons";

const Navbar = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const isPageActive = (pageURL: string): boolean => {
    return pageURL === pathname;
  };

  return (
    <header className="w-full bg-black/90 text-white">
      <ContentContainer>
        <nav className="flex items-center justify-between">
          <Logo />

          <div className="flex items-center gap-5">
            <Link to={"/explore"} aria-label="explore" className="group">
              <div
                className={`flex items-center gap-2 px-4 py-2 rounded-lg group-hover:bg-gray-500/40
                ${isPageActive("/explore") ? "bg-gray-500/40" : "bg-none"}
                `}
              >
                <ExploreIcon size={20} color="white" />
                <span className="capitalize font-bold text-sm md:text-md">
                  explore
                </span>
              </div>
            </Link>
          </div>
        </nav>
      </ContentContainer>
    </header>
  );
};

export default Navbar;
