export default function App() {
  return (
    <>
      <section className="group bg-white m-4 p-6 border rounded-3xl border-black shadow-[10px_10px_0px_0px_#000] hover:shadow-[14px_14px_0px_0px_#000] transition-all cursor-pointer max-w-sm">
        <figure className="w-fit">
          <img
            src="./illustration-article.svg"
            alt="article illustration"
            className="rounded-xl object-cover"
          />
        </figure>
        <article className="my-4 flex flex-col gap-2 w-full">
          <aside className="p-1 px-2 rounded-md bg-[color:hsl(47,_88%,_63%)] w-fit">
            <p className="font-bold">Learning</p>
          </aside>
          <time className="date">
            <p>Published 21 Dec 2023</p>
          </time>
        </article>
        <article className="my-4 flex flex-col gap-2w w-full">
          <h1 className="font-bold text-2xl group-hover:text-[color:hsl(47,_88%,_63%)]">
            HTML & CSS foundations
          </h1>
          <p className="font-light text-[color:hsl(0,_0%,_50%)] text-wrap">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
        </article>
        <article className="flex items-center gap-2 w-full">
          <img src="./image-avatar.webp" alt="author image" width={40} />
          <p className="font-bold">Greg Hooper</p>
        </article>
      </section>
      <footer className="text-center mx-6">
        Challenge by
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          className="hover:underline"
        >
          {' '}Frontend Mentor
        </a>
        . Coded by 
        <a
          href="https://twitter.com/haikalgakbar"
          target="_blank"
          className="hover:underline"
        >
          {' '}@haikalgakbar
        </a>
        .
      </footer>
    </>
  );
}