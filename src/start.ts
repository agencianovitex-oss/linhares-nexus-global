import { createStart, createMiddleware } from "@tanstack/react-start";

import { renderErrorPage } from "./lib/error-page";
import { attachSupabaseAuth } from "@/integrations/supabase/auth-attacher";

const errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
});

/** Canonical production host. Any other host the app answers on is 301'd here. */
const CANONICAL_HOST = "www.linhareslaw.com";

/** Hosts we actively redirect to the canonical one (never the editor preview). */
const REDIRECT_HOSTS = new Set([
  "linhareslaw.com",
  "linhares-nexus-global.lovable.app",
]);

/**
 * Security headers. Frame-blocking is applied only on the custom domain so the
 * Lovable editor/preview iframe on *.lovable.app keeps working.
 */
const securityHeadersMiddleware = createMiddleware().server(async ({ next, request }) => {
  const url = new URL(request.url);
  const host = url.hostname;

  if (REDIRECT_HOSTS.has(host)) {
    url.protocol = "https:";
    url.hostname = CANONICAL_HOST;
    url.port = "";
    return new Response(null, { status: 301, headers: { Location: url.toString() } });
  }

  const result = await next();
  const response = result.response ?? result;
  if (!(response instanceof Response)) return result;

  const contentType = response.headers.get("content-type") ?? "";
  const isDocument = contentType.includes("text/html");

  response.headers.set("Strict-Transport-Security", "max-age=63072000; includeSubDomains; preload");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "geolocation=(), microphone=(), camera=(), payment=(), usb=()",
  );

  if (isDocument && !host.endsWith(".lovable.app") && host !== "localhost") {
    response.headers.set("X-Frame-Options", "DENY");
    response.headers.set(
      "Content-Security-Policy",
      "frame-ancestors 'none'; base-uri 'self'; object-src 'none'; form-action 'self'",
    );
  }

  return result;
});

export const startInstance = createStart(() => ({
  functionMiddleware: [attachSupabaseAuth],
  requestMiddleware: [securityHeadersMiddleware, errorMiddleware],
}));
