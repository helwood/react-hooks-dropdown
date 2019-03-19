import Head from 'next/head'

const Layout = (props) => {
    return (
        <div>
            <Head>
                <title>{props.pagetitle}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"></link>
            </Head>
            {props.children}
        </div>
    )
}

export default Layout