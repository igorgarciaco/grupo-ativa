/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
const React = require("react")
const HeadComponents = [
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-126017324-1">
    </script>,
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments)}
        gtag('js', new Date());

        gtag('config', 'UA-126017324-1');
    </script>
]

exports.onRenderBody = ({
    setHeadComponents,
    setHtmlAttributes,
    setBodyAttributes
}, pluginOptions) => {
    // setHtmlAttributes(HtmlAttributes)
    setHeadComponents(HeadComponents)
    // setBodyAttributes(BodyAttributes)
}