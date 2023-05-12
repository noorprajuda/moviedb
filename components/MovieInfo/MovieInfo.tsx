import Image from "next/image";
// Helpers
import { calcTime, convertMoney } from "../../helpers";
// Components
import Thumb from "../Thumb/Thumb";
import Pill from "../Pill/Pill";
// Types
import { Crew } from "../../api/types";

type Props = {
  thumbUrl: string;
  backgroundImgUrl: string;
  title: string;
  year: string;
  summary: string;
  rating: number;
  directors: Crew[];
  time: number;
  budget: number;
  revenue: number;
};

const MovieInfo = ({
  thumbUrl,
  backgroundImgUrl,
  title,
  year,
  summary,
  rating,
  directors,
  time,
  budget,
  revenue,
}: Props) => (
  <div className="relative w-full h-auto p-4">
    <div className="relative h-full min-h-128 flex flex-col md:flex-row max-w-7xl p-4 m-auto z-10 rounded-xl bg-zinc-800 bg-opacity-90">
      <div className="relative w-full h-96 md:h-auto md:w-1/3">
        <Thumb imgUrl={thumbUrl} />
      </div>
      <div className="text-white px-0 py-4 md:py-0 text-left md:px-8 w-full md:w-2/3">
        <h2 className="text-2xl md:text-4xl font-bold pb-4">
          {title} ({year})
        </h2>

        <div className="flex flex-row mb-2">
          <span className="text-yellow-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clipRule="evenodd"
              />
            </svg>
          </span>

          <span className="ml-2">{rating.toFixed(1)} / 10</span>
        </div>

        <h3 className="text-lg font-bold">Summary</h3>
        <p className="mb-8 text-sm text-justify md:text-left md:text-lg">
          {summary}
        </p>
        <div>
          <div>
            <h3 className="text-lg font-bold">
              Director{directors.length > 1 ? "s" : ""}
            </h3>
            <div>
              {directors.map((director) => (
                <p key={director.credit_id}>{director.name}</p>
              ))}
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-lg font-bold">Movie data</h3>
            <Pill
              className="md:ml-0"
              text={`Running time: ${calcTime(time)}`}
            />
            <Pill text={`Budget: ${convertMoney(budget)}`} />
            <Pill text={`Revenue: ${convertMoney(revenue)}`} />
          </div>
        </div>
      </div>
    </div>
    <Image
      priority
      placeholder="blur"
      blurDataURL="/placeholder.jpg"
      objectFit="cover"
      objectPosition="center"
      layout="fill"
      src={backgroundImgUrl}
      alt="thumb"
    />
  </div>
);

export default MovieInfo;
