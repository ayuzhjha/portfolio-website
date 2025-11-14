import Head from 'next/head';

const CustomHead = ({ title = 'Ayush Jha' }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Ayush Jha is a third-year B.Tech Computer Science student skilled in full-stack development, AI/ML, automation, and system design."
      />
      <meta
        name="keywords"
        content=""
      />
      <meta property="og:title" content="Ayush Jha Portfolio" />
      <meta
        property="og:description"
        content="Full-Stack Developer | AI/ML Enthusiast | Seeking internship roles in software engineering, AI, or backend development."
      />
      <meta property="og:url" content="" />
    </Head>
  );
};

export default CustomHead;
