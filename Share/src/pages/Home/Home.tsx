import React from "react"; 
// import { fields } from "../../lib/translation/strings";
import { useTranslation } from "react-i18next";
// import * as storeQueries from "../../queries/stores";

import { BrandsIcons } from "../../component/shared/BrandsIcons/BrandsIcons";
// import MainBanner from "../../component/MainBanner/MainBanner";
import HomeSlider from "../../component/HomeSlider/HomeSlider.tsx";
import MainBanner from "../../component/MainBanner/MainBanner.tsx";
import { CollectionBlocks } from "../../component/CollectionBlocks/CollectionBlocks";
// import CountDown from "../../component/CountDown/CountDown";

import "./Home.scss";

export const Home = () => {
  const { t } = useTranslation();

  const {
    loading: storeLoading,
    data: storeData,
    error: storeError
  } = useQuery(storeQueries.getCustomStores);

  return (
    <>
      {/* <CountDown /> */}
      <MainBanner />
      <HomeSlider
        loading={storeLoading}
        error={storeError}
        text={t(fields.stores)}
        items={
          storeData?.generalOptions?.generalOptions?.home?.customOrderVendors
        }
      />
      <CollectionBlocks />
      <BrandsIcons />
    </>
  );
};
