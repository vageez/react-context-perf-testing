import React, { memo } from "react";
import { useContextProvider, connectContext } from "./context";

const Navigation = memo(() => {
  const [, dispatch] = useContextProvider();
  console.log(`Navigation Render`);
  return (
    <div>
      <button onClick={() => dispatch({ type: "LATEST" })}>LATEST</button>
      <button onClick={() => dispatch({ type: "TRENDING" })}>TRENDING</button>
      <button onClick={() => dispatch({ type: "RECOMMENDED" })}>
        RECOMMENDED
      </button>
      <button onClick={() => dispatch({ type: "MYLIST" })}>MY LIST</button>
    </div>
  );
});
const Latest = () => {
  const [{ latest }] = useContextProvider();
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
  const [{ trending }] = useContextProvider();
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
  const [{ recommended }] = useContextProvider();
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

const MyList = () => {
  const [{ mylist }] = useContextProvider();
  console.log(`MyList Render`);
  return (
    <>
      <h3>My List</h3>
      <div>
        {mylist.map((r, i) => (
          <p key={i}>{r.name}</p>
        ))}
      </div>
    </>
  );
};
export default () => {
  const [{ view }] = useContextProvider();
  return (
    <>
      <h1>FakeFlix</h1>
      <Navigation />
      {view.cata({
        RECOMMENDED: () => <Recommended />,
        TRENDING: () => <Trending />,
        LATEST: () => <Latest />,
        MYLIST: () => <MyList />
      })}
    </>
  );
};
