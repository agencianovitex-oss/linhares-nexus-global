import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  useRouterState,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Toaster } from "@/components/ui/sonner";
import { organizationSchema, websiteSchema, founderSchema } from "@/lib/schema";
import { attorneyProfiles } from "@/i18n/content/team-profiles";
import { BRAND_LOGO_PATH } from "@/lib/brand";
import { localeFromPath } from "@/i18n/useI18n";
import { LOCALE_HREFLANG } from "@/i18n/locales";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Linhares Law: Advogados Especialistas em Imigração Americana e Green Card" },
      {
        name: "description",
        content:
          "Escritório de advocacia dedicado exclusivamente à imigração para os EUA. Assessoramos profissionais qualificados (Vistos EB-2 NIW, EB-1), executivos (L-1), investidores (EB-5) e famílias em suas jornadas para viver legalmente na América.",
      },
      { property: "og:site_name", content: "Linhares Law" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "format-detection", content: "telephone=no" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { name: "author", content: "Linhares Law" },
      {
        property: "og:title",
        content: "Linhares Law: Advogados Especialistas em Imigração Americana e Green Card",
      },
      {
        name: "twitter:title",
        content: "Linhares Law: Advogados Especialistas em Imigração Americana e Green Card",
      },
      {
        property: "og:description",
        content:
          "Escritório de advocacia dedicado exclusivamente à imigração para os EUA. Assessoramos profissionais qualificados (Vistos EB-2 NIW, EB-1), executivos (L-1), investidores (EB-5) e famílias em suas jornadas para viver legalmente na América.",
      },
      {
        name: "twitter:description",
        content:
          "Escritório de advocacia dedicado exclusivamente à imigração para os EUA. Assessoramos profissionais qualificados (Vistos EB-2 NIW, EB-1), executivos (L-1), investidores (EB-5) e famílias em suas jornadas para viver legalmente na América.",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon.png" },
      { rel: "icon", type: "image/png", sizes: "192x192", href: "/favicon-192.png" },
      { rel: "icon", type: "image/png", sizes: "512x512", href: "/favicon-512.png" },
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Montserrat:wght@300;400;500;600;700&display=swap",
      },
      // Preload the hero video poster so the first paint is stable.
      { rel: "preload", as: "image", href: "/__l5e/assets-v1/9e1a0a8e-4405-4f02-8d8e-be2ca5533292/hero-skyline-desktop.jpg" },
    ],
    scripts: [
      {
        children:
          "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-W27KR5B');",
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(organizationSchema(BRAND_LOGO_PATH)),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(websiteSchema()),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(
          (() => {
            const p = attorneyProfiles.pt["andre-linhares"];
            return founderSchema({
              name: p.name,
              jobTitle: p.title,
              description: p.shortBio,
              image: p.hero,
              url: "/equipe/andre-linhares",
              bars: p.bars,
              knowsAbout: p.practice,
              awards: p.recognition,
            });
          })(),
        ),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});


function RootShell({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const lang = LOCALE_HREFLANG[localeFromPath(pathname)];
  return (
    <html lang={lang}>
      <head>
        <HeadContent />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-W27KR5B"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
            title="Google Tag Manager"
          />
        </noscript>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
      <Toaster />
    </QueryClientProvider>
  );
}
