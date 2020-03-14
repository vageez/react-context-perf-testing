import React, { useContext, memo } from "react";
import { Context } from "./context";

const Navigation = memo(() => {
  const [, dispatch] = useContext(Context);
  console.log(`Navigation Render`);
  return (
    <div>
      <button onClick={() => dispatch({ type: "LATEST" })}>LATEST</button>
      <button onClick={() => dispatch({ type: "TRENDING" })}>TRENDING</button>
      <button onClick={() => dispatch({ type: "RECOMMENDED" })}>
        RECOMMENDED
      </button>
    </div>
  );
});
const Latest = () => {
  const [{ latest }] = useContext(Context);
  console.log(`Latest Render`);
  return (
    <div>
      <h3>Latest</h3>
      <div>
        {latest.map((r, i) => (
          <p key={i}>{r.name}</p>
        ))}
      </div>
    </div>
  );
};
const Trending = () => {
  const [{ trending }] = useContext(Context);
  console.log(`Trending Render`);
  return (
    <>
      <h3>Trending</h3>
      <div>
        {trending.map((r, i) => (
          <p key={i}>{r.name}</p>
        ))}
      </div>
    </>
  );
};
const Recommended = () => {
  const [{ recommended }] = useContext(Context);
  console.log(`Recommended Render`);
  return (
    <>
      <h3>Recommended</h3>
      <div>
        {recommended.map((r, i) => (
          <p key={i}>{r.name}</p>
        ))}
      </div>
    </>
  );
};

export default () => {
  const [{ view }] = useContext(Context);
  return (
    <>
      <h1>FakeFlix</h1>
      <Navigation />
      {/*
      <Recommended />
      <Trending />
      <Latest /> */}
      {view.cata({
        RECOMMENDED: () => <Recommended />,
        TRENDING: () => <Trending />,
        LATEST: () => <Latest />
      })}
    </>
  );
};
