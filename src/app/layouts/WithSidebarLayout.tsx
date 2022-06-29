import { ReactNode } from "react";
import Navbar from "../components/Header";
interface Props {
  children?: ReactNode;
}
const WithSidebarLayout = ({ children, ...props }: Props) => {
  return (
    <div>
      <Navbar />
      <h1>This is sidebar</h1>
      {children}
    </div>
  );
};

export default WithSidebarLayout;
