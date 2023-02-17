import Head from 'next/head';
import Link from 'next/Link';
import React from 'react';

export default function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title ? title + ' - TopShop' : 'TopShop'}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col justify-between">
        <header>
          <nav className="flex h-12 justify-between">
            <Link href="/">
              <a className="text-lg font-bold">TopShop</a>
            </Link>
            <div>
              <Link href="/cart">Cart</Link>
              <Link href="/login">Login</Link>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer>f</footer>
      </div>
    </>
  );
}
