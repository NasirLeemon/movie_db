import SideNav from "./SideNav";

const Sidebar = async () => {
  const { getSidebarLinks } = await import("@/lib/data");
  const links = getSidebarLinks();
  return (
    <aside>
      <SideNav links={links} />
    </aside>
  );
};

export default Sidebar;
