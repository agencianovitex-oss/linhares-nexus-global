import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Toaster } from "@/components/ui/sonner";

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

const ORGANIZATION_JSONLD = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  name: "Linhares Law",
  slogan: "U.S. Immigration · Boutique Practice",
  url: "/",
  areaServed: "United States",
  knowsAbout: [
    "U.S. Immigration Law",
    "Employment-Based Immigration",
    "Investor Visas",
    "Family-Based Immigration",
  ],
  location: [
    { "@type": "Place", name: "Orlando Office", address: { "@type": "PostalAddress", addressLocality: "Orlando", addressRegion: "FL", addressCountry: "US" } },
    { "@type": "Place", name: "Miami Office", address: { "@type": "PostalAddress", addressLocality: "Miami", addressRegion: "FL", addressCountry: "US" } },
    { "@type": "Place", name: "New York Office", address: { "@type": "PostalAddress", addressLocality: "New York", addressRegion: "NY", addressCountry: "US" } },
    { "@type": "Place", name: "Salt Lake City Office", address: { "@type": "PostalAddress", addressLocality: "Salt Lake City", addressRegion: "UT", addressCountry: "US" } },
  ],
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Linhares Law, U.S. Immigration · Boutique Practice" },
      {
        name: "description",
        content:
          "Linhares Law is a boutique U.S. immigration firm with offices in Orlando, Miami, New York and Salt Lake City, representing international professionals, executives, investors and families.",
      },
      { property: "og:site_name", content: "Linhares Law" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "format-detection", content: "telephone=no" },
      { property: "og:title", content: "Linhares Law, U.S. Immigration · Boutique Practice" },
      { name: "twitter:title", content: "Linhares Law, U.S. Immigration · Boutique Practice" },

    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Montserrat:wght@300;400;500;600;700&display=swap",
      },
      // Preload hero background images so the first paint is sharp on home.
      { rel: "preload", as: "image", href: "/__l5e/assets-v1/9e1a0a8e-4405-4f02-8d8e-be2ca5533292/hero-skyline-desktop.jpg", media: "(min-width: 768px)" },
      { rel: "preload", as: "image", href: "/__l5e/assets-v1/27aa9258-bffb-49a2-83d6-6c1f74be8e89/hero-skyline-mobile.jpg", media: "(max-width: 767px)" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(ORGANIZATION_JSONLD),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
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
