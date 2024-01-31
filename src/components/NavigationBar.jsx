import { links } from "../lib/data.js";

const ScrollToSection = (sectionID) => {
  const selected = document.getElementById(sectionID.slice(1));

  if (selected) {
    window.scroll({
      top: selected.offsetTop - 100,
      behavior: "smooth",
    });
  }
};

const NavigationBar = ({ active, setActive }) => {
  return (
    <header className=" z-[100] fixed top-4">
      <nav className="bg-white/95 px-7 py-4 rounded-full">
        <ul className=" flex gap-6 ">
          {links.map((link) => {
            return (
              <div
                key={link.hash}
                className={`hover:text-black transition ${
                  active === link.hash
                    ? "text-black font-[600]  rounded-full"
                    : "text-gray-500"
                }`}
              >
                <button
                  onClick={() => {
                    ScrollToSection(link.hash);
                    setActive(link.hash);
                  }}
                >
                  {link.name}
                </button>
              </div>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default NavigationBar;
