import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby"
import {Page} from "../styles/base/page.sc";

export default ({ children }) => {
    const data = useStaticQuery(
        graphql`
          query {
            site {
              siteMetadata {
                title
              }
            }
          }
        `
    )
    return (
        <Page>
            <header><h2>{data.site.siteMetadata.title}</h2></header>
            <main>
                {children}
            </main>
            <footer>
                <Link to={`/`}>Home</Link>
                <Link to={`/about/`}>About</Link>
            </footer>
        </Page>
    )
}
