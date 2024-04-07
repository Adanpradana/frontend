import { useRouter } from "next/router";
import { routes } from "../../../data/routes";
import Link from "next/link";

export default function MainLayout({ children }) {
  const router = useRouter();

  return (
    <div className="grid grid-cols-4 h-screen ">
      <div className="bg-red-200 p-4 space-y-2 ">
        {routes.map((route) => (
          <div
            key={route.id}
            className={`bg-blue-500 ${
              router.pathname.includes(route.path) && "bg-blue-600"
            } hover:bg-blue-600 rounded-md`}
          >
            <Link href={route.path}>
              <div className="p-4 text-[1.5rem] text-white uppercase text-center">
                {route.name}
              </div>
            </Link>
          </div>
        ))}
      </div>
      <div className="col-span-3 bg-yellow-50">{children}</div>
    </div>
  );
}
