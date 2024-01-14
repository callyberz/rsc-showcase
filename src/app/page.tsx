import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default async function Home() {
  // this is React Server Component
  // This fetch will run on the server during `next build`
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  const data = await res.json();

  return (
    <main className={styles.main}>
      <Link href="/user">/user</Link>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div>
        {data ? (
          <p>
            <code className={styles.code}>
              {`data from RSC: ${JSON.stringify(data, null, 2)}`}
            </code>
          </p>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </main>
  );
}
