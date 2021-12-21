import Head from "next/head";
import Layout from "../page-components/Layout";
import GithubUsers from "../page-components/GithubUsers/index";
export async function getStaticProps() {
  const res = await fetch("https://api.github.com/users");
  const data = await res.json();
  console.log(data);
  return {
    props: {
      data,
    },
  };

}



export default function Home({ data }) {
 
  return (
    <div>
      <Head>
        <title>Github Users </title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout>
        <GithubUsers data={data}></GithubUsers>
      </Layout>
    </div>
  );
}
