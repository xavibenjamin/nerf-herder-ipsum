import Link from "next/link";

const Header = () => {
  return (
    <header className={`max-w-2xl w-full`}>
      <h1 className="font-bold">
        <Link className="flex items-center gap-3" href="/">
          <svg className={`w-9 fill-blue-300`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M18 5.99c0-3.32-2.69-6-6-6 -3.32 0-6 2.686-6 5.99v1h12Zm-7.5-1c-.83 0-1.5-.68-1.5-1.5 0-.827.67-1.5 1.5-1.5 .827 0 1.5.673 1.5 1.5 0 .82-.673 1.5-1.5 1.5Zm3.5 1c-.56 0-1-.45-1-1 0-.56.44-1 1-1 .55 0 1 .44 1 1 0 .55-.45 1-1 1Zm3 18h6l-1-4v-9c0-1.11-.9-2-2-2H4c-1.105 0-2 .89-2 2v9l-1 4h6l-1-4v-1l2 2h8l2-2v1Zm-2-7H9c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1Zm0-4H9c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1Z"/></svg>
          <span className={`text-3xl`}>Nerf Herder Ipsum</span>
        </Link>
      </h1>
      <p className={`text-base text-orange-200 mt-3`}>A Star Wars-themed lorem ipsum generator.<br /> Made with <svg className={`w-4 inline-block mx-1 fill-rose-300`} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>love</title><path d="M18.19 2.04c-2.61-.29-4.27.96-6.2 3.008C9.94 2.998 8.39 1.75 5.79 2.04 2.24 2.42-.53 6.47.07 10c.96 5.65 5.944 9 11.917 12 5.97-3 10.95-6.35 11.917-12 .6-3.53-2.18-7.572-5.72-7.96Z"/></svg> by <Link className={`underline ease-in duration-200 hover:text-violet-300`} target="_blank" href="https://xavibenjamin.com">Xavi Benjamin</Link>.</p>

    </header>
  ) 
}

export default Header;
