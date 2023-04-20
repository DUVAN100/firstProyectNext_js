import Link from "next/link";
import Layout from "../components/layout";

const custom404 = () => (
  <Layout title="Page Not Found">
    <div className="text-center">
      <h1 className="display-1">404</h1>
      <p>
        This page does not exists. Please return to{" "}
        <Link href="/" passHref={true} legacyBehavior={true}>
          <p>Home</p>
        </Link>
      </p>
    </div>
  </Layout>
);

export default custom404;
