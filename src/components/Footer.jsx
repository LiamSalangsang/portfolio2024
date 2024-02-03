export default function Footer({ setActive }) {
  const ScrollBackToTop = () => {
    setActive("#home");
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex bg-gray-500 font-semibold w-full mt-10 p-4 hover:bg-black hover:text-white transition">
      <button
        className="w-full md:translate-x-[50%] overflow-hidden"
        onClick={ScrollBackToTop}
      >
        Back To Top
      </button>
      <div className=" w-full text-right hidden md:block">Liam Salangsang Portfolio 2024</div>
    </div>
  );
}
