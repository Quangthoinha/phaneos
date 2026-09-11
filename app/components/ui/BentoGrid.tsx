import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "../../lib/utils";

export const BentoGrid = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        "grid w-full grid-cols-1 md:grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: {
  name: string;
  className?: string;
  background?: ReactNode;
  Icon?: React.ElementType;
  description: string;
  href?: string;
  cta?: string;
}) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-2xl",
      "bg-slate-900/60 [box-shadow:0_0_0_1px_rgba(255,255,255,0.08)] hover:[box-shadow:0_0_0_1px_rgba(255,255,255,0.18)] transition-all duration-300",
      className
    )}
  >
    <div>{background}</div>
    <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300">
      {Icon && (
        <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-3 text-slate-200 group-hover:scale-105 transition-transform">
          <Icon className="h-5 w-5 text-rose-400" />
        </div>
      )}
      <h3 className="text-xl font-semibold text-white tracking-tight">
        {name}
      </h3>
      <p className="max-w-lg text-slate-400 text-sm leading-relaxed">{description}</p>
    </div>

    {cta && (
      <div className="pointer-events-none z-10 flex w-full translate-y-0 transform-gpu flex-row items-center p-6 pt-0 text-xs font-mono uppercase tracking-wider text-rose-400">
        <span>{cta}</span>
        <ArrowRight className="ml-2 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
      </div>
    )}

    <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-white/[0.02]" />
  </div>
);
