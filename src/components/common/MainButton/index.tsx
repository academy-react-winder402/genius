import { Link } from "../Link";

interface MainButtonProps {
  text: string;
  href: string;
}

const MainButton = ({ text, href }: MainButtonProps) => {
  return (
    <Link
      to={href}
      className="bg-primary text-white w-[131px] h-[48px] rounded-full flex justify-center items-center"
    >
      {text}
    </Link>
  );
};

export { MainButton };
