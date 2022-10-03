/** @format */

import Link from 'next/link';

export default function PostList() {
  return (
    <Link
      style={{
        width: '100px',
        height: '30px',
        padding: '10px',
        backgroundColor: 'lightcyan',
      }}
      href={'Sports/축구화'}
    >
      {'to 축구화 Post (file)'}
    </Link>
  );
}
