import React from 'react';
import Head from 'next/head'

function Header(props) {
  return (
    <Head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>My Blog</title>
    </Head>
  );
}

export default Header;