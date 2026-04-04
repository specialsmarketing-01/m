export default function ProjectsLoading() {
  return (
    <div className="mx-auto max-w-6xl animate-pulse px-4 py-14 sm:px-6 lg:px-8">
      <div className="h-48 w-full rounded-xl bg-slate-200 sm:h-64" />
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <div className="aspect-[16/10] bg-slate-200" />
            <div className="space-y-2 p-5">
              <div className="h-5 w-4/5 rounded bg-slate-200" />
              <div className="h-3 w-full rounded bg-slate-100" />
              <div className="h-3 w-2/3 rounded bg-slate-100" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
