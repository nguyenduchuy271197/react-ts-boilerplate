import { ReactNode } from "react";
import Navbar from "../components/Header";
interface Props {
  children?: ReactNode;
}
const DefaultLayout = ({ children, ...props }: Props) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default DefaultLayout;
