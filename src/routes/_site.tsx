import { Outlet, createFileRoute, useRouterState } from "@tanstack/react-router";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { stripLocale } from "@/i18n/useI18n";

export const Route = createFileRoute("/_site")({
  component: SiteLayout,
});

function SiteLayout() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const transparent = stripLocale(pathname) === "/";

  return (
    <div className="flex min-h-screen flex-col bg-background text-ink">
      <Header transparentOverHero={transparent} />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
