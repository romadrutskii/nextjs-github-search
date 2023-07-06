import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function usePageLoading() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    router.isReady && setIsLoading(false);
  }, [router.isReady]);

  return isLoading;
}
