
import clsx from 'clsx';
export default function DiscountStep(
    {
        children,
        className,
        iconComponent,
        stepTitle,
    }: {
        children?: React.ReactNode;
        className?: string;
        iconComponent: React.ReactNode;
        stepTitle: string;
    }
) {
    const classes = clsx('flex', 'flex-col', 'text-center', className)
    return (
        <div className={classes}>
            <div className="self-center">
                {iconComponent}
            </div>
            <div className="text-2xl py-2">{stepTitle}</div>
            <div>
                {children}
            </div>
        </div>
    )
}
