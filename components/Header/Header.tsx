import Link from 'next/link';
import Image from 'next/image';
// Components
import SearchInput from '../SearchInput/SearchInput';


type Props = {
  setQuery?: React.Dispatch<React.SetStateAction<string>>;
};

const Header = ({ setQuery }: Props) => (
  <div className='sticky flex top-0 z-40 w-full h-16 bg-zinc-900'>
    <div className='flex justify-between w-full h-full max-w-7xl m-auto px-4'>
      <Link href='/'>
        <div className='flex items-center cursor-pointer'>
          <div className='invisible md:visible'>
            <div className='flex flew-row text-white font-bold text-2xl align-middle items-center'>
            <Image width='100' height='100' src='/favicon3.ico' alt='lebah-ganteng' />
            <div className=''>
              Lebah Ganteng Movie
              </div>
            </div>
          </div>
          <div className='absolute md:invisible pt-2 text-base'>
            <div className='flex flew-row text-white font-bold text-sm align-middle items-center'>
              <Image height='42' width='42' src='/favicon3.ico' alt='lebah-ganteng' />
              <div className=''>
                Lebah Ganteng Movie
                </div>
            </div>
          </div>
        </div>
      </Link>

      {setQuery ? (
        <div className="relative flex items-center">
          <SearchInput setQuery={setQuery} />
        </div>
      ) : null}
    </div>
  </div>
);

export default Header;
