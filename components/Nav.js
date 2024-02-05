import Link from "next/link";
import { useRouter } from "next/router";
import { AiFillHome } from "react-icons/ai";
import { BiSolidCog } from "react-icons/bi";
import { FiList } from "react-icons/fi";
import { MdProductionQuantityLimits } from "react-icons/md";
import { TbArrowsRandom } from "react-icons/tb";
import { GrUserAdmin } from "react-icons/gr";

const Nav = () => {

    const inactiveLink = "flex gap-1 p-1";
    const activeLink = inactiveLink + " bg-white text-blue-900 rounded-l-lg text-xl";

    const router = useRouter();
    const { pathname } = router;

  return (
    <sidebar className=" text-white p-4 pr-0">
      <Link href={"/"} className="flex gap-1 mb-4 mr-4">
        <GrUserAdmin size={30} />
        <span className="pt-0.5">EcommerceAdmin</span>
      </Link>

      <nav className="flex flex-col gap-2">
        <Link
          href={"/"}
          className={pathname === "/" ? activeLink : inactiveLink}
        >
          <AiFillHome size={30} />
          <span className="pt-0.5">Dashboard</span>
        </Link>

        <Link
          href={"/products"}
          className={pathname.includes("/products") ? activeLink : inactiveLink}
        >
          <MdProductionQuantityLimits size={30} />
          <span className="pt-0.5">Products</span>
        </Link>

        <Link
          href={"/orders"}
          className={pathname.includes("/orders") ? activeLink : inactiveLink}
        >
          <FiList size={30} />
          <span className="pt-0.5">Orders</span>
        </Link>

        <Link
          href={"/setting"}
          className={pathname.includes("/setting") ? activeLink : inactiveLink}
        >
          <BiSolidCog size={30} /> <span className="pt-0.5">Setting</span>
        </Link>
      </nav>
    </sidebar>
  );
};

export default Nav;
