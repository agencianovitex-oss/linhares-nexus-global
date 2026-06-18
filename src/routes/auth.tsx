import { createFileRoute, Link, useNavigate, useSearch } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const searchSchema = z.object({
  redirect: z.string().optional().catch(undefined),
  mode: z.enum(["login", "signup", "forgot"]).optional().catch(undefined),
});

export const Route = createFileRoute("/auth")({
  validateSearch: (s) => searchSchema.parse(s),
  head: () => ({
    meta: [
      { title: "Entrar — Linhares Law" },
      { name: "description", content: "Acesso ao painel administrativo Linhares Law." },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const search = useSearch({ from: "/auth" });
  const [mode, setMode] = useState<"login" | "signup" | "forgot">(search.mode ?? "login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const redirectTo = search.redirect ?? "/admin";

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: window.location.origin + "/admin",
            data: { full_name: name },
          },
        });
        if (error) throw error;
        toast.success("Conta criada. Verifique seu e-mail se a confirmação estiver ativa.");
        navigate({ to: "/admin" });
      } else if (mode === "login") {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        toast.success("Bem-vindo de volta.");
        navigate({ to: redirectTo as any });
      } else {
        const { error } = await supabase.auth.resetPasswordForEmail(email, {
          redirectTo: window.location.origin + "/reset-password",
        });
        if (error) throw error;
        toast.success("E-mail de recuperação enviado.");
        setMode("login");
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Erro inesperado");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setLoading(true);
    try {
      const result = await lovable.auth.signInWithOAuth("google", {
        redirect_uri: window.location.origin + "/admin",
      });
      if (result.error) {
        toast.error(result.error.message ?? "Erro ao entrar com Google");
      } else if (!result.redirected) {
        navigate({ to: "/admin" });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[rgb(6,36,67)] px-4">
      <div className="w-full max-w-md bg-white p-8 shadow-2xl">
        <div className="mb-8 text-center">
          <h1 className="text-2xl font-serif text-[rgb(6,36,67)]">Linhares Law</h1>
          <p className="mt-1 text-xs uppercase tracking-[0.2em] text-[rgb(179,134,66)]">Painel Editorial</p>
        </div>

        <form onSubmit={handleEmailAuth} className="space-y-4">
          {mode === "signup" && (
            <div>
              <Label htmlFor="name">Nome</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
          )}
          <div>
            <Label htmlFor="email">E-mail</Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          {mode !== "forgot" && (
            <div>
              <Label htmlFor="password">Senha</Label>
              <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={6} />
            </div>
          )}
          <Button type="submit" disabled={loading} className="w-full bg-[rgb(6,36,67)] hover:bg-[rgb(16,52,92)] text-white">
            {loading ? "Aguarde…" : mode === "signup" ? "Criar conta" : mode === "forgot" ? "Enviar link de recuperação" : "Entrar"}
          </Button>
        </form>

        {mode !== "forgot" && (
          <>
            <div className="my-4 flex items-center gap-2 text-xs text-muted-foreground">
              <span className="flex-1 border-t border-border" />ou<span className="flex-1 border-t border-border" />
            </div>
            <Button onClick={handleGoogle} variant="outline" disabled={loading} className="w-full">
              Continuar com Google
            </Button>
          </>
        )}

        <div className="mt-6 text-center text-sm space-y-1">
          {mode === "login" && (
            <>
              <button type="button" className="text-[rgb(179,134,66)] underline" onClick={() => setMode("signup")}>
                Criar nova conta
              </button>
              <div>
                <button type="button" className="text-muted-foreground hover:underline" onClick={() => setMode("forgot")}>
                  Esqueci minha senha
                </button>
              </div>
            </>
          )}
          {mode === "signup" && (
            <button type="button" className="text-[rgb(179,134,66)] underline" onClick={() => setMode("login")}>
              Já tenho conta
            </button>
          )}
          {mode === "forgot" && (
            <button type="button" className="text-[rgb(179,134,66)] underline" onClick={() => setMode("login")}>
              Voltar para entrar
            </button>
          )}
          <div>
            <Link to="/" className="text-xs text-muted-foreground hover:underline">
              ← Voltar ao site
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
