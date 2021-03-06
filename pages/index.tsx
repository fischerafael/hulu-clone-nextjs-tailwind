import Head from 'next/head'
import { Header } from '../components/Header'
import { Nav } from '../components/Nav'

export default function Home() {
    return (
        <>
            <Head>
                <title>Hulu</title>
                <link rel="icon" href="/" />
            </Head>
            <Header />
            <Nav />
            <h1 className="text-6xl">Hulu Clone</h1>
        </>
    )
}
