import Image from "next/image";
import { CSSProperties } from "react";

type CardProps = {
  header: string;
  text: string;
  image: string;
  imageText: string;
  style: CSSProperties;
};

const Card = (props: CardProps) => {
  return (
    <div
      style={props.style}
      className={`border-t-[5px] w-[300px] p-6 rounded-lg shadow-xl m-6`}
    >
      <div className="w-64 mb-8">
        <h2 className="text-accent font-bold text-xl mb-2">{props.header}</h2>
        <p className=" text-primary font-extralight text-sm">{props.text}</p>
      </div>
      <div className="flex justify-end">
        <Image src={props.image} width={50} height={50} alt={props.imageText} />
      </div>
    </div>
  );
};

export default Card;
