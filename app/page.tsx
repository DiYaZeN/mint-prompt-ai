import React from "react";
import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">Ai Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Mint-Prompt-AI is a platform that allows you to discover and share
        creative AI generated prompts.
      </p>

        <Feed />
    </section>
  );
};

export default Home;
