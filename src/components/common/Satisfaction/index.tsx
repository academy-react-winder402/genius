import { LikeDislike } from "./LikeDislike";
import { Rating } from "./Rating";

interface SatisfactionProps {
  nameData: string;
}

const Satisfaction = ({ nameData }: SatisfactionProps) => {
  return (
    <div className="satisfaction">
      <Rating />
      <LikeDislike nameData={nameData} />
    </div>
  );
};

export { Satisfaction };
