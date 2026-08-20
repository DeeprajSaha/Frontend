import React, { useState } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";

const tooltipVariants = cva(
    "absolute z-50 whitespace-nowrap rounded-md px-3 py-2 text-sm shadow-md",
    {
        variants: {
            position: {
                top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
                bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
                left: "right-full top-1/2 -translate-y-1/2 mr-2",
                right: "left-full top-1/2 -translate-y-1/2 ml-2",
            },

            variant: {
                dark: "bg-gray-900 text-white",
                light: "bg-white text-gray-900 border border-gray-200",
            },
        },

        defaultVariants: {
            position: "top",
            variant: "dark",
        },
    },
);

interface TooltipProps extends VariantProps<typeof tooltipVariants> {
    content: string;
    children: React.ReactNode;
    className?: string;
}

const Tooltip = ({
    content,
    children,
    position,
    variant,
    className,
}: TooltipProps) => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <div
            className="relative inline-flex"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            {children}

            {isVisible && (
                <div
                    className={cn(
                        tooltipVariants({
                            position,
                            variant,
                        }),
                        className,
                    )}
                >
                    {content}
                </div>
            )}
        </div>
    );
};

export { Tooltip, tooltipVariants };
