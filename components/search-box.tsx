import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  onSearch?: (value: string) => void;
};

const SearchBox: React.FC<Props> = ({ className, onSearch }) => {
  return (
    <Input
      placeholder="Search Menu"
      className={cn("w-full, h-16", className)}
      onChange={(e) => onSearch && onSearch(e.target.value)}
    />
  );
};

export default SearchBox;
