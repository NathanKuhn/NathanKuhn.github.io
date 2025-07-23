import { ReactNode } from 'react';

interface BoxProps {
    children: ReactNode;
    className?: string;
    title?: string;
}

export default function Box({
    children,
    className = '',
    title
}: BoxProps) {
    const classes = [
        'rounded-xl',
        'border',
        'border-blue-900/60',
        'bg-gray-950/90',
        'transition-all',
        'duration-300',
        'p-0',
    ].join(' ');
    return (
        <div className={`${classes} ${className}`}>
            {title && (
                <div className="w-full">
                    <h2 className="text-white text-2xl font-bold py-3 px-4">{title}</h2>
                    <div className="w-full border-t border-blue-900/30" />
                </div>
            )}
            <div className="w-full px-4 py-3 pt-2">{children}</div>
        </div>
    );
}
