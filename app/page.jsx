import Feed from "@components/feed";
import Image from "next/image";
const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <Image
        src="/assets/images/logo.png"
        alt="Logo"
        width={300}
        height={300}
        className="object-contain"
      />
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">Project Ideas</span>
      </h1>
      <p className="desc text-center">
        Idealer is an open-source platform for modern world to discover, create
        and share creative new ideas.
      </p>
      <Feed />
    </section>
  );
};

export default Home;
