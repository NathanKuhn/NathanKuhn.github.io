import ReactMarkdown from "react-markdown";

interface BoxProps {
  content: string;
  className?: string;
  title?: string;
  titleLink?: string;
}

export default function Box({
  content,
  className = "",
  title,
  titleLink,
}: BoxProps) {
  const classes = [
    "w-full",
    "rounded-xl",
    "border",
    "border-blue-900/60",
    "bg-gray-950/90",
    "transition-all",
    "duration-300",
    "text-white",
  ].join(" ");
  return (
    <div className={`${classes} ${className}`}>
      {title && (
        <div className="text-2xl font-bold py-3 px-4 border-b border-blue-900/60">
          {titleLink ? (
            <a href={titleLink} className="hover:underline">
              {title}
            </a>
          ) : (
            <h2>{title}</h2>
          )}
        </div>
      )}
      <div className="px-4 py-3 pt-2">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>
    </div>
  );
}
