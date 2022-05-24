import Head from 'next/head'

export default function Header({title}) {
  return (
    <Head>
        <title>{title}</title>
        <link rel="shortcut icon" href="/img/logo.png" />
        <meta name="description" content="Gestión de almacén | CECATI" />
    </Head>
  )
}
