/** @format */

import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

const Home: NextPage = () => {
  return <Link href={'/articles/Sports'}>{'to Sports Category'}</Link>;
};

export default Home;
