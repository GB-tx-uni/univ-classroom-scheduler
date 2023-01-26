// import '../styles/globals.css'
// import type { AppProps } from 'next/app'

// export default function App({ Component, pageProps }: AppProps) {
//   return <Component {...pageProps} />
// }

import React from "react";
import ReactDOM from "react-dom";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import awsmobile from "../src/aws-exports";
import Amplify from "@aws-amplify/core";
import { Hub } from "aws-amplify";
import "react-big-calendar/lib/css/react-big-calendar.css"

import PageChange from "../Components/PageChange";

import "@fortawesome/fontawesome-free/css/all.min.css";
// import "styles/tailwind.css";
import "styles/index.css"
Hub.listen("auth", (data) => {
    if (data.payload.event === "signOut") {
        store.clearAll();
        Router.push("/auth/login");
    }
});

// Router.events.on("routeChangeStart", (url) => {
//     console.log(`Loading: ${url}`);
//     document.body.classList.add("body-page-transition");
//     ReactDOM.render(
//         <PageChange path={url} />,
//         document.getElementById("page-transition")
//     );
// });
// Router.events.on("routeChangeComplete", () => {
//     ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
//     document.body.classList.remove("body-page-transition");
// });
// Router.events.on("routeChangeError", () => {
//     ReactDOM.unmountComponentAtNode(document.getElementById("page-transition"));
//     document.body.classList.remove("body-page-transition");
// });

export default class MyApp extends App {

    componentDidMount() {
        Amplify.configure(awsmobile);
        let comment = document.createComment(`

=========================================================
* Notus NextJS - v1.1.0 based on Tailwind Starter Kit by Creative Tim
=========================================================

* Product Page: https://www.creative-tim.com/product/notus-nextjs
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/notus-nextjs/blob/main/LICENSE.md)

* Tailwind Starter Kit Page: https://www.creative-tim.com/learning-lab/tailwind-starter-kit/presentation

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

`);
        document.insertBefore(comment, document.documentElement);
    }
    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        return { pageProps };
    }
    render() {
        const { Component, pageProps } = this.props;

        const Layout = Component.layout || (({ children }) => <>{children}</>);

        return (
            <React.Fragment>
                <Head>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, shrink-to-fit=no"
                    />
                    <title>Univ survey</title>
                    {/* <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"></script> */}
                </Head>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </React.Fragment>
        );
    }
}
