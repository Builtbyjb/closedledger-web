import GuestNavBar from "~/components/navbar/GuestNavBar";

export function GuestLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GuestNavBar />
      <div className="">
        <main className="">{children}</main>
      </div>
    </>
  );
}
