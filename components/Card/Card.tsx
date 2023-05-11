// Components
import Thumb from "../Thumb/Thumb";

type Props = {
  imgUrl: string;
  title: string;
  subtitle?: string;
  vote_average: number;
};

const Card = ({ imgUrl, title, subtitle, vote_average }: Props) => (
  <div className="h-80">
    <div className="relative h-full">
      <Thumb imgUrl={imgUrl} />
      <div className="absolute w-full bottom-0 px-4 py-2 rounded-b-xl bg-zinc-800">
        <h2 className="text-white text-left text-sm truncate">{title}</h2>
        
        {vote_average ? (
          <div className="flex flex-row mb-2">
            <span className="text-yellow-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                  clipRule="evenodd"
                />
              </svg>
            </span>

            <span className="ml-2">
              <h2 className="text-white text-center text-sm truncate">
                {vote_average?.toFixed(1)} / 10
              </h2>
            </span>
          </div>
        ) : null}
        {subtitle ? (
          <p className="text-yellow-500 text-left text-xs truncate">
            {subtitle}
          </p>
        ) : null}
      </div>
    </div>
  </div>
);

export default Card;
