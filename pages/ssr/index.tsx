import { useEffect, useState } from "react";

export default function SSR() {
  const [state, setState] = useState("bay");
  console.log("ssr");
  useEffect(() => {
    setState("更新");
  }, []);
  return <div>{state}</div>;
}
