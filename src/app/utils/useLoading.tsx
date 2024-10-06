"use client";
import { useEffect, useState } from "react";

const useLoading = () => {
  const [mount, setMount] = useState(false);
  useEffect(() => {
    setMount(true);
  }, []);

  return { mount };
};

export default useLoading;
