import React from 'react';
import Head from 'next/head'

function Header(props) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charset="UTF-8" />
      <meta nam="Descrption" content="This is a cool Blog!" />
      <title>My Blog</title>
    </Head>
  );
}

export default Header;