import { Link } from 'react-router-dom';

function Header() {
  const menu = [
    { id: 1, name: "HOME", link: "/" },
    { id: 2, name: "ABOUT", link: "/about" },
    { id: 3, name: "PROJECTS", link: "/projects" },
    { id: 4, name: "CONTACT", link: "/contact" },
  ];

  return (
    <div className="flex items-center w-screen justify-between border-b-[1px]">
      <div className="w-[60px] h-[60px] bg-black">
        <img src="/logo.png" className="p-1" alt="Logo" />
      </div>
      <div className="hidden md:flex gap-14">
        {menu.map((item) => (
          <Link
            key={item.id}
            to={item.link}
            className="cursor-pointer hover:underline text-base font-extrabold text-red-950 hover:text-black"
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="w-[60px] h-[60px] bg-red-950 flex justify-center items-center cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-10 text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
          />
        </svg>
      </div>
    </div>
  );
}

export default Header;
