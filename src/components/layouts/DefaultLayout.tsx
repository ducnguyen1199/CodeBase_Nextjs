import Head from "next/head";
import Link from "next/link";
import { FC, ReactNode } from "react";
import styles from "@/styles/layout.module.css";

type DefaultLayoutProps = {
  children: ReactNode;
};

export const DefaultLayout: FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Project</title>
        {/* SEO */}
      </Head>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <main>{children}</main>
    </div>
  );
};
