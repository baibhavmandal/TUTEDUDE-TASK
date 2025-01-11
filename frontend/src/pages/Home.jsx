import React from "react";

import Search from "../components/Search.jsx";
import Navigation from "../components/Navigation.jsx";
import List from "../components/List.jsx";

function Home() {
  return (
    <div className="flex justify-center">
      <div className="mx-w-md">
        <Search />
        <Navigation />
        <List />
      </div>
    </div>
  );
}

export default Home;
