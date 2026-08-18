import { Button } from "react-aria-components";
import { useRouter } from "next/navigation";

type ButtonProps = {
  text: string;
  bgColor?: string;
  textColor?: string;
  className?: string;
  id?: string;
  href?: string;
};

const ColoredButton = ({
  text,
  bgColor,
  textColor,
  className,
  id,
  href,
}: ButtonProps) => {
  const defaultClassName =
    "p-2 pr-4 pl-4 mt-2 font-bold transition-all duration-300 cursor-pointer rounded-sm";
  const colorClassName = `bg-${bgColor} text-${textColor} hover:bg-${textColor} hover:text-${bgColor}`;
  const buttonClassName = className ? className : "text-lg";
  const router = useRouter();

  return (
    <Button
      className={`${defaultClassName} ${colorClassName} ${buttonClassName}`}
      id={id}
      aria-labelledby={id}
      onPress={() => router.push(`${href}`)}
    >
      {text}
    </Button>
  );
};

ColoredButton.displayName = "ColoredButton";

export default ColoredButton;
