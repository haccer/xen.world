import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className={'flex-grow flex flex-col items-center p-24 font-bebasNeue'}>
      <div className={'flex flex-col items-center'}>
        <h1 className={'mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl'}>
          X E N
        </h1>
        <hr className={'w-48 h-1 mx-auto my-4 bg-black border-0 rounded md:my-10'} />
      </div>
      <div className={'flex flex-col text-3xl items-center justify-between'}>
        <Link href={'https://instagram.com/xen'}>INSTAGRAM</Link>
        <Link href={'https://x.com/xentzu'}>X</Link>
        <Link href={'https://github.com/haccer'}>GITHUB</Link>
      </div>
    </div>
  );
}
