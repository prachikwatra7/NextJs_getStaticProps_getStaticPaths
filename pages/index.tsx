import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Next JS pre rendering</h1>
      <Link href="/users" legacyBehavior>
        <a>Link to Users</a>
      </Link>
      <br />
      <Link href="/posts" legacyBehavior>
        <a>Link to Posts</a>
      </Link>
    </div>
  );
}
