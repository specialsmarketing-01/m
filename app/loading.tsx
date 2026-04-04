export default function Loading() {
  return (
    <div className="mx-auto max-w-6xl animate-pulse px-4 py-16 sm:px-6 lg:px-8">
      <div className="h-10 w-2/3 max-w-md rounded bg-slate-200" />
      <div className="mt-4 h-4 w-full max-w-2xl rounded bg-slate-200" />
      <div className="mt-2 h-4 w-5/6 max-w-xl rounded bg-slate-200" />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <div key={i} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="aspect-video rounded-lg bg-slate-200" />
            <div className="mt-4 h-5 w-3/4 rounded bg-slate-200" />
            <div className="mt-2 h-3 w-full rounded bg-slate-100" />
            <div className="mt-2 h-3 w-5/6 rounded bg-slate-100" />
          </div>
        ))}
      </div>
    </div>
  );
}
