export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-paper-bg px-6 text-center text-text-color">
      <p className="text-xs uppercase tracking-[0.3em] text-text-light">404</p>
      <h1 className="text-4xl font-light">Page not found</h1>
      <a
        href="/"
        className="rounded-full border border-black/10 px-5 py-2 text-sm transition hover:bg-white/70"
      >
        Back home
      </a>
    </main>
  );
}
