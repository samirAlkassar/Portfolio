import React from "react";
import Link from "next/link";
import { cva, VariantProps } from "class-variance-authority";
import classNames from "classnames";

const buttonClasses = cva("rounded-full inline-flex items-center", {
    variants: {
        variant: {
            primary: "bg-white-cold text-background",
            secondary: "text-offWhite bg-textWhite bg-opacity-10 border border-white-a08 backdrop-blur-[12px] hover:bg-opacity-20 transition-colors ease-in",
        },
        size: {
            small: "text-lg px-6 py-1.5",
            medium: "md:text-lg text-sm md:px-6 md:py-3 px-2 py-2",
            large: "text-lg px-6 h-12"
        }
    },
    defaultVariants: {
        variant: "primary",
        size: "medium"
    }
});

interface ButtonProps extends VariantProps<typeof buttonClasses> {
    children: React.ReactNode;
    href?: string;
    className?: string;
}

interface HeroElementProps {
    children: React.ReactNode;
}

export const IconContainer = ({ children }: HeroElementProps) => {
    return <span className="bg-white-a08 px-2 rounded-full ml-2 -mr-2 py-[0.3rem]">{children}</span>;
}

export const Button = ({ children, href, variant, size, className }: ButtonProps) => {
    if (href) {
        return <Link className={classNames(buttonClasses({ variant, size }), className)} href={href}>{children}</Link>;
    }
    return <button type="button" className={classNames(buttonClasses({ variant, size }), className)}>{children}</button>;
};