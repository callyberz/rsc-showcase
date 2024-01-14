'use client';

import { Suspense } from 'react';
import useSWR from 'swr';

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export default function Post() {
  const { data, error } = useSWR(`https://randomuser.me/api`, fetcher);
  if (error) return 'Failed to load';
  if (!data) return 'Loading...';

  return (
    <code>{`data from client component: ${JSON.stringify(
      data.results[0].name,
      null,
      2
    )}`}</code>
  );
}
