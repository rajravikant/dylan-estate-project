import { cn } from "../../utils";

const Button = ({
  title,
  onClick,
  type,
  state,
  className,
}: {
  title: string;
  state? : 'submitting' | 'loading' | 'idle' ;
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <button
        onClick={onClick}
      className={cn("bg-primary text-white text-sm  rounded-md px-6 py-2",className)}
    >
      {state === 'submitting' ? 'Loggin In' : title }
    </button>
  );
};

export default Button;
