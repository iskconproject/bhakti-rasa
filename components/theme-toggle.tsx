"use client";

import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import useHasMounted from "@/hooks/useHasMounted";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const hasMounted = useHasMounted();
  return (
    <>
      {hasMounted && theme === "dark" ? (
        <Button onClick={() => setTheme("light")}>
          <Sun />
        </Button>
      ) : (
        <Button onClick={() => setTheme("dark")}>
          <Moon />
        </Button>
      )}
    </>
  );
};

export default ThemeToggle;
