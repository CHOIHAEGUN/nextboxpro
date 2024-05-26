'use client';

import { useBearStore } from '@/stores/zustandStore';
import { useState } from 'react';

/**
 * Event 컴포넌트
 * @returns list
 */
const Event = () => {
  const bears = useBearStore((state) => state.bears);
  return (
    <>
      <h1>Event page - {bears}</h1>
    </>
  );
};

export default Event;
