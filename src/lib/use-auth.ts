import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { Session, User } from "@supabase/supabase-js";

export type AppRole = "admin" | "editor" | "viewer";

interface AuthState {
  loading: boolean;
  session: Session | null;
  user: User | null;
  roles: AppRole[];
}

export function useAuth(): AuthState {
  const [state, setState] = useState<AuthState>({
    loading: true,
    session: null,
    user: null,
    roles: [],
  });

  useEffect(() => {
    let mounted = true;

    const loadRoles = async (userId: string) => {
      const { data } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", userId);
      return (data?.map((r) => r.role as AppRole) ?? []);
    };

    const init = async () => {
      const { data } = await supabase.auth.getSession();
      const session = data.session;
      const user = session?.user ?? null;
      const roles = user ? await loadRoles(user.id) : [];
      if (mounted) setState({ loading: false, session, user, roles });
    };
    init();

    const { data: sub } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "INITIAL_SESSION" || event === "TOKEN_REFRESHED") return;
      const user = session?.user ?? null;
      if (!user) {
        if (mounted) setState({ loading: false, session: null, user: null, roles: [] });
        return;
      }
      loadRoles(user.id).then((roles) => {
        if (mounted) setState({ loading: false, session, user, roles });
      });
    });

    return () => {
      mounted = false;
      sub.subscription.unsubscribe();
    };
  }, []);

  return state;
}

export function hasRole(roles: AppRole[], ...required: AppRole[]) {
  return required.some((r) => roles.includes(r));
}
