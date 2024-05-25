'use client'; // (a)

import { useEffect } from 'react';
import { useBearStore } from '@/stores/zustandStore';

const Hydration = () => {
  useEffect(() => {
    useBearStore.persist.rehydrate();
  }, []); // (b)

  return null;
};

export default Hydration;
