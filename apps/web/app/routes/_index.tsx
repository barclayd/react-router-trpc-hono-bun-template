import { client } from 'index';
import type { Route } from './+types/_index';

export function meta({}: Route.MetaArgs) {
  return [
    { title: 'New React Router App' },
    { name: 'description', content: 'Welcome to React Router!' },
  ];
}

export async function loader() {
  return {
    data: await client.get.query(),
  };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return <h1 className="font-sans text-2xl">{loaderData?.data?.id ?? 4}</h1>;
}
