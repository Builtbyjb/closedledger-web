import { Outlet } from "@remix-run/react";
import { AuthLayout } from "~/components/layouts/AuthLayout";

export default function Layout() {
  return (
    <>
      <AuthLayout>
        <Outlet />
      </AuthLayout>
    </>
  );
}
