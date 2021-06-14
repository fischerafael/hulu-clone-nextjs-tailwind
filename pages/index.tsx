import Head from 'next/head'
import { Header } from '../components/Header'

export default function Home() {
    return (
        <>
            <Head>
                <title>Hulu</title>
                <link rel="icon" href="/" />
            </Head>
            <Header />
            <h1 className="text-6xl">Hulu Clone</h1>
        </>
    )
}
