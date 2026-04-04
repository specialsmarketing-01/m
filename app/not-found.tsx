import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center px-4 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-[#F37021]">
        404
      </p>
      <h1 className="mt-2 text-3xl font-bold text-[#0a1628]">Page not found</h1>
      <p className="mt-3 text-slate-600">
        The page you are looking for may have moved. Try the home page or contact
        CTST for assistance.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-md bg-[#F37021] px-5 py-3 text-sm font-semibold text-white hover:bg-[#e0651c]"
      >
        Back to home
      </Link>
    </div>
  );
}
