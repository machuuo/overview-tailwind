import Nav from "../Nav/Nav";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <>
      <Nav />
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
