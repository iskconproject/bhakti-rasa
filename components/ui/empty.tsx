import { cn } from "@/lib/utils";
import { Frown } from "lucide-react";

type Props = {
  message?: string;
  children?: React.ReactNode;
  className?: string;
};
const Empty: React.FC<Props> = ({ message, children, className }) => {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      {!children ? (
        <>
          <Frown className="w-16 h-16 mx-auto text-gray-500" />
          <div className="text-center text-gray-500">
            {message || "No items found"}
          </div>
        </>
      ) : null}

      {children && children}
    </div>
  );
};

export default Empty;
