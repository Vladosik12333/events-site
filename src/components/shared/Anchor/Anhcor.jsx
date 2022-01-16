import React, { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import "./Anhcor.scss";

export default function Anhcor() {
  const [status, setStatus] = useState(false);

  const handleScroll = () => {
    const scrollableHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const GOLDEN_RATIO = 0.1;

    if (document.documentElement.scrollTop / scrollableHeight > GOLDEN_RATIO) {
      setStatus(true);
    } else {
      setStatus(false);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (status)
    return (
      <button className="anhcor" type="button" onClick={scrollToTop}>
        <AiOutlineArrowUp />
      </button>
    );

  return null;
}
