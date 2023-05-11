import React from 'react';
import Image from 'next/image';
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

type Props = {
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

const TIME = 300; // ms

const SearchInput = ({ setQuery }: Props) => {
  const [text, setText] = React.useState('');
  const timer = React.useRef<NodeJS.Timeout>();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;

    clearTimeout(timer.current);

    setText(value);

    timer.current = setTimeout(() => {
      setQuery(value);
    }, TIME);
  };

  return (
    <>
      <div className="mt-1 flex items-center relative rounded-md shadow-sm">
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
            <MagnifyingGlassIcon className="h-5 w-5 text-white" aria-hidden="true" />
          </button>
        </span>

        <input 
        type="search" 
        className="h-10 pl-10 w-32 md:w-96 placeholder-white rounded-full p-4 text-md bg-zinc-700 text-white"
        placeholder="Search Movie"
        value={text}
        onChange={handleInput}
        aria-invalid="true"
        aria-describedby="email-error"
        min={0}>
        </input>

       

      </div>
    </>
  );
};

export default SearchInput;
