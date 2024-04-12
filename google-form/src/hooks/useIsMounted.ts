import { useRef, useEffect } from "react";

function useIsMounted() {
  const isMounted = useRef<boolean>(false);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  return isMounted.current;
}

export default useIsMounted;
