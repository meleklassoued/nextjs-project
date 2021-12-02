import Head from "next/head";
import Layout from "../page-components/Layout";
// import { createGlobalStyle, ThemeProvider } from "styled-components";
// const GlobalStyle = createGlobalStyle`
// html{
//   box-sizing: border-box;
//   background: #F5F4F0;
//   display:block;
//   height: 100%;
//   max-width: 640px;
//   margin:0 auto;
//   padding: 0;
// }

// body{
//   background-color:#fafafa;
//   min-height:100vh;
//   padding: 1rem;
//   margin-top:0;
//   font-family:Verdana;
// }

// `;
// const theme = {
//   colors: {
//     primary: "#fafafa",
//   },
// };
export default function Home() {
  return (
    <div>
      <Head>
        <title>Github Users </title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout></Layout>
    </div>
  );
}
