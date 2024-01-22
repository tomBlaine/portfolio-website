import Link from "next/link";

const NavLink = ({ href, title }) => {
    return (
        <Link href= {href} className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white 2xl:text-2xl 2xl:pr-10">{title}</Link>
    );
};

export default NavLink;