import Head from "next/head";
import { createGlobalStyle, ThemeProvider } from "styled-components";
const GlobalStyle = createGlobalStyle`
html{
  box-sizing: border-box;
  background: #F5F4F0;
  display:block;
  height: 100%;
  max-width: 640px;
  margin:0 auto;
  padding: 0;
}

body{
  background-color:#fafafa;
  min-height:100vh;
  padding: 1rem;
  margin-top:0;
  font-family:Verdana;
}

`;
const theme = {
  colors: {
    primary: "#fafafa",
  },
};
export default function Home() {
  return (
    <div>
      <Head>
        <title>NextJS Blog with Butter CMS</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h1> NextJS Blog with Butter CMS</h1>
    </div>
  );
}
