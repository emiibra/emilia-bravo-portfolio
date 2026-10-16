import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Nav } from "@/components/site";
import { I18nProvider } from "@/i18n";
import appCss from "../styles.css?url";

const queryClient = new QueryClient();
export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Emilia Bravo | Portfolio" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
});
function RootShell({ children }: { children: React.ReactNode }) { return <html lang="en"><head><HeadContent /></head><body>{children}<Scripts /></body></html>; }
function RootComponent() { return <QueryClientProvider client={queryClient}><I18nProvider><Nav /><Outlet /></I18nProvider></QueryClientProvider>; }
