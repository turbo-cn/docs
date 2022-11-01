import { useRouter } from "next/router";
import { useConfig, useTheme } from "nextra-theme-docs";
import { Footer } from "./components/Footer";
import Navigation from "./components/Navigation";
import HeaderLogo from "./components/HeaderLogo";
import { Discord, Github } from "./components/Social";

const SITE_ROOT = "https://turbo.build";

/**
 * @type {import('nextra-theme-docs').DocsThemeConfig}
 */
const theme = {
  project: {
    icon: Github,
  },
  chat: {
    icon: Discord,
  },
  docsRepositoryBase: "https://github.com/turbo-cn/docs/blob/main",
  getNextSeoProps: function SEO() {
    const router = useRouter();
    const { frontMatter } = useConfig();

    let section = "Turbo 中文文档";
    if (router?.pathname.startsWith("/pack")) {
      section = "Turbopack 中文文档";
    }
    if (router?.pathname.startsWith("/repo")) {
      section = "Turborepo 中文文档";
    }

    const defaultTitle = frontMatter.overrideTitle || section;

    return {
      description: frontMatter.description,
      defaultTitle,
      titleTemplate: `%s – ${section}`,
    };
  },
  unstable_flexsearch: true,
  unstable_staticImage: true,
  toc: {
    float: true,
  },
  font: false,
  feedback: {
    link: "碰到问题？在这里请求帮助 ->",
  },
  logo: HeaderLogo,
  logoLink: false,
  head: function Head() {
    const router = useRouter();
    const { systemTheme = "dark" } = useTheme();
    const { frontMatter } = useConfig();
    const fullUrl =
      router.asPath === "/" ? SITE_ROOT : `${SITE_ROOT}${router.asPath}`;

    const asPath = router.asPath;

    let ogUrl;

    if (frontMatter.ogImage || asPath === "/") {
      ogUrl = `${SITE_ROOT}/og-image.png`;
    } else {
      const type = asPath.startsWith("/repo")
        ? "repo"
        : asPath.startsWith("/pack")
        ? "pack"
        : "";
      const title = frontMatter.title
        ? `&title=${encodeURIComponent(frontMatter.title)}`
        : "";

      ogUrl = `https://turbo-site-og.vercel.app/api/og?type=${type}${title}`;
    }

    const baiduStatisticsScript = `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement(\"script\");
        hm.src = "https://hm.baidu.com/hm.js?8e5291f90d0b584803c5c0e31939218e";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
    `

    return (
      <>
        <meta name="keywords" content="turbo，turborepo，turbopack，turborepo中文文档，turbopack中文文档，turborepo汉化，turbopack汉化"></meta>
        <meta name="description" content="Turbo 是一个用 Rust 实现的 JavaScript 和 TypeScript 高性能打包构建工具"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`/images/favicon-${systemTheme}/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`/images/favicon-${systemTheme}/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`/images/favicon-${systemTheme}/favicon-16x16.png`}
        />
        <link
          rel="mask-icon"
          href={`/images/favicon-${systemTheme}/safari-pinned-tab.svg`}
          color="#000000"
        />
        <link
          rel="shortcut icon"
          href={`/images/favicon-${systemTheme}/favicon.ico`}
        />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="theme-color" content="#000" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@turborepo" />
        <meta name="twitter:creator" content="@turborepo" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={fullUrl} />
        <link rel="canonical" href={fullUrl} />
        <meta property="twitter:image" content={ogUrl} />
        <meta property="og:image" content={ogUrl} />
        <meta property="og:locale" content="en_IE" />
        <meta property="og:site_name" content="Turbo" />
        <link rel="prefetch" href="/repo" as="document" />
        <link rel="prefetch" href="/repo/docs" as="document" />
        <link rel="prefetch" href="/pack" as="document" />
        <link rel="prefetch" href="/pack/docs" as="document" />
        <script dangerouslySetInnerHTML={{ __html: baiduStatisticsScript}}></script>
      </>
    );
  },
  editLink: {
    text: "帮助我们修订这篇文档",
  },
  navbar: Navigation,
  footer: {
    component: Footer,
  },
  nextThemes: {
    defaultTheme: "dark",
  },
};
export default theme;
