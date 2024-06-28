
import Navbar from "@/components/navbar";

type Props = {
  children: React.ReactNode;
};

const ProtectedLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default ProtectedLayout;
