import { Outlet } from "@remix-run/react";
import { GuestLayout } from "~/components/layouts/GuestLayout";

export default function AuthRoute() {
  return (
    <>
      <GuestLayout>
        <Outlet />
      </GuestLayout>
    </>
  );
}
