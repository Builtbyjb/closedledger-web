import GuestNavBar from "~/components/navbar/GuestNavBar";

export function GuestLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[90%] py-8 mx-auto sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[60%] 2xl:w-[50%]">
      <GuestNavBar />
      <div className="">{children}</div>
    </div>
  );
}
