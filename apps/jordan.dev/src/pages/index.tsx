
import Head from "@/components/meta/Head";
import IndexContents from "@/contents/index";

import { getBaseUrl } from "@/helpers/url";

export default function Home() {
  return (
   <>
    <Head
        title="Jordan Muthemba · Blockchain Developer & Educator"
        description="An online portfolio showcasing my projects, insights, and expertise as a Blockchain Developer and Educator passionate about decentralized technology, Web3, and building impactful solutions."
        ogImage={`${getBaseUrl()}/assets/images/og-image.png`}
        overrideTitle
      />
      <IndexContents />
   </>
  );
}
