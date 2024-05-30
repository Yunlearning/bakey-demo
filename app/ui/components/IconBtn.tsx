
export default function IconBtn({
    children,
    className,
    onClick,
}: Readonly<{
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}>) {
    return (
        <button
            className={`cursor-pointer ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}