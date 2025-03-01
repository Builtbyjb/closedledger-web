import { AuthNavBar } from "~/components/navbar/AuthNavBar";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "~/components/ui/sidebar";

export function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen overflow-hidden">
      <SidebarProvider aria-describedby="sidebar">
        <AuthNavBar />
        <SidebarInset>
          <SidebarTrigger className="m-4" />
          <main className="flex-1 overflow-y-auto p-8">{children}</main>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
