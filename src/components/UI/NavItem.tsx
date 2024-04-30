"use client";

import { cn } from "@/utils/cn";
import { Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { ComponentProps } from "react";

export const Nav = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <Typography className={cn("", className)}>{children}</Typography>;
};

export const NavLink = (
  props: Omit<ComponentProps<typeof Link>, "className">
) => {
  const pathname = usePathname();

  return (
    <Link
      {...props}
      className={cn(
        "p-4 hover:bg-secondary hover:text-secondary-foreground focus-visible:bg-secondary focus-visible:text-secondary-foreground",
        pathname === props.href && "bg-background text-foreground"
      )}
    />
  );
};
