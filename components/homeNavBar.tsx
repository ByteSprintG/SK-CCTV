import { auth, signIn, signOut } from "@/auth";
import Link from "next/link";
import Image from "next/image";
import { isAdmin, isTechnician } from "@/lib/utils";
import {
  Package,
  ShoppingCart,
  Camera,
  Search,
  ListOrdered,
} from "lucide-react";

const homeNavbar = async () => {
  const session = await auth();
  const isUserAdmin = isAdmin(session?.user?.email);
  const isUserTechnician = isTechnician(session?.user?.email);

  return (
    <header className="justify-center shadow-sm">
      <nav className="px-12 flex items-center justify-between py-4 fixed w-full bg-gradient-to-b from-slate-900 via-slate-900 to-transparent bg-opacity-80 backdrop-blur-md z-50 border-b border-cyan-500 border-opacity-20 shadow-lg">
        <Link className="p-3" href="/">
          <Image src="/logo.png" alt="logo" width={144} height={30} />
        </Link>

        <div>
          <Link
            className="p-3 text-cyan-100 hover:text-cyan-300 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-cyan-500 hover:bg-opacity-10 relative group"
            href="/"
          >
            Home
          </Link>
          <Link
            className="p-3 text-cyan-100 hover:text-cyan-300 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-cyan-500 hover:bg-opacity-10 relative group"
            href="/products"
          >
            Shop All
          </Link>
          <Link
            className="p-3 text-cyan-100 hover:text-cyan-300 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-cyan-500 hover:bg-opacity-10 relative group"
            href="/cctv-packages"
          >
            Packages
          </Link>
          <Link
            className="p-3 text-cyan-100 hover:text-cyan-300 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-cyan-500 hover:bg-opacity-10 relative group"
            href="/contact"
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center">
          {session?.user ? (
            <>
              {isUserAdmin && (
                <Link
                  className="p-3 text-cyan-100 hover:text-cyan-300 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-cyan-500 hover:bg-opacity-10 relative group"
                  href="/admin"
                >
                  Admin Dashboard
                </Link>
              )}

              {isUserTechnician && (
                <Link
                  className="p-3 text-cyan-100 hover:text-cyan-300 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-cyan-500 hover:bg-opacity-10 relative group"
                  href="/technician"
                >
                  Technician Dashboard
                </Link>
              )}

              <Link
                className="p-3 text-cyan-100 hover:text-cyan-300 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-cyan-500 hover:bg-opacity-10 relative group"
                href="/orders"
              >
                <ListOrdered size={30} />
              </Link>

              <Link
                href={`/profile`}
                className="p-3 hover:text-blue-600 transition-colors flex items-center gap-2"
              >
                {session.user.image ? (
                  <Image
                    src={session.user.image}
                    alt="Profile"
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                ) : (
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white">
                    {session.user.name?.[0] || "?"}
                  </div>
                )}
              </Link>

              <Link
                className="p-3 text-cyan-100 hover:text-cyan-300 px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-cyan-500 hover:bg-opacity-10 relative group"
                href="/shoppingcart"
              >
                <ShoppingCart size={30} />
              </Link>
            </>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("google");
              }}
            >
              <button
                type="submit"
                className="flex items-center gap-2 border border-gray-300 rounded-full px-4 py-2 hover:bg-black transition"
              >
                <img
                  src="https://www.gstatic.com/images/branding/product/1x/gsa_64dp.png"
                  alt="Google"
                  className="w-5 h-5"
                />
                <span className="text-sm font-medium text-cyan-100">
                  Sign in with Google
                </span>
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};

export default homeNavbar;
