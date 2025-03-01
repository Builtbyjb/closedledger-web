import GuestNavBar from "~/components/navbar/GuestNavBar";

export function GuestLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[90%] py-8 mx-auto sm:mx-auto sm:w-[90%] md:mx-auto md:w-[80%] lg:mx-auto lg:w-[60%]">
      <GuestNavBar />
      <div className="">{children}</div>
    </div>
  );
}
