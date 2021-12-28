import Head from "next/head";

import Layout from "../components/layout"; //, { siteTitle }

import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Button from "@mui/material/Button";

const Home = () => {
  const router = useRouter();
  const { t } = useTranslation("common");
  const siteTitle = t("siteTitle");

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>{t("intro")}</p>
        <p>{t("text")}</p>
        <Link href="/" locale={router.locale === "en" ? "ar" : "en"}>
          <a>
            <Button variant="contained">{t("change-language")}</Button>
          </a>
        </Link>
      </section>
    </Layout>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"]))
      // Will be passed to the page component as props
    }
  };
}

export default Home;
