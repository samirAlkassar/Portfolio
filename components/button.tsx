import React from "react";
import Link from "next/link";
import { cva, VariantProps } from "class-variance-authority";
import classNames from "classnames";


 

const buttonClasses = cva("rounded-full inline-flex items-center active:scale-95 transition-all duration-200", {
    variants: {
        variant: {
            primary: "bg-white-cold text-background max-h-12 overflow-y-hidden hover:[&_p]:translate-y-0 [&_p]:translate-y-0",
            secondary: "bg-secondaryButtonColor",
        },
        size: {
            extraSmall: "text-xs px-4 py-1 md:text-sm md:px-4 md:py-1.5 hover:bg-white-cold hover:text-background transition-all duration-300 ease-in border border-white border-opacity-10",
            small: "[&_p]:text-lg [&_p]:px-6 [&_p]:py-1.5 [display:inherit] md:[&_p]:translate-y-[5px] md:hover:[&_p]:-translate-y-[50px] ",
            medium: "md:[&_p]:text-lg md:[&_p]:px-5 md:[&_p]:py-2 sm:[&_p]:text-sm sm:[&_p]:px-2 sm:[&_p]:py-2 [&_p]:text-sm [&_p]:px-1.5 [&_p]:py-2 md:[&_p]:translate-y-[25px] md:hover:[&_p]:-translate-y-[28px]",
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
    onClick?: () => void;
    buttonhref?: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}

interface HeroElementProps {
    children: React.ReactNode;
}

export const IconContainer = ({ children }: HeroElementProps) => {
    return <span className="bg-white-a08 px-2 rounded-full ml-2 -mr-2 py-[0.3rem]">{children}</span>;
}

export const Button = ({ children, href, variant, size, className, onClick,buttonhref, type = "button", disabled }: ButtonProps) => {
    if (href) {
        return <Link onClick={onClick} className={classNames(buttonClasses({ variant, size }), className)} href={href} target="_blank" rel="noopener noreferrer">
            {children}
        </Link>;
    }
    return <button onClick={onClick} disabled={disabled} type={type} className={classNames(buttonClasses({ variant, size }), className)}>
        {variant === "primary" ?
        <a href={buttonhref}>
            <p className="transition-all duration-200 ease-in md:block hidden">
                <span>{children}</span>
                <br/>
                <br/>
                <span>{children}</span>
            </p>
            <p className="md:hidden block translate-y-13">{children}</p>
        </a>:
        <p>{children}</p>}
    </button>;
};