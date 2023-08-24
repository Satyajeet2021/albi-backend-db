import React, { useCallback, useRef, useState } from "react";
import { ApolloError } from "apollo-boost";
import Flickity from "react-flickity-component";
import { useWindowWidth } from "../../lib/hooks/useWindowWidth";
import { Store } from "../../queries/stores";
import { Image } from "../shared/Image/Image";
import TitleWithLine from "../shared/TitleWithLine/TitleWithLine";
import { ThemeLink } from "../shared/ThemeLink/ThemeLink";
import { ReactComponent as NextButton } from "../../assets/icons/next-button.svg";
import { ReactComponent as PrevButton } from "../../assets/icons/prev-button.svg";
import HomePageSlideShowLoader from "../HomePageSlideShow/HomePageSlideShowLoader";

import "flickity/dist/flickity.css";
import "./HomeSlider.scss";

interface HomeSliderProps {
  items?: Store[];
  error?: ApolloError;
  text: string;
  loading: boolean;
}

const HomeSlider = (props: HomeSliderProps) => {
  const [titleRef, setTitleRef] = useState<any>(null);
  const flickity = useRef<any>(null);
  const windowWidth = useWindowWidth();
  const isTablet = windowWidth < 1024;

  const desktopItems = props.items
    ?.filter((item) => item.id !== "dGVybTo0OTky")
    ?.map((item: any, i: number) => {
      return i % 2 === 0 && props.items?.slice(i, i + 2);
    })
    ?.filter((e: any) => e);

  const mobileItems = props.items
    ?.filter((item) => item.id !== "dGVybTo0OTky")
    ?.map((item: any, i: number) => {
      return i % 3 === 0 && props.items?.slice(i, i + 3);
    })
    ?.filter((e: any) => e);

  const items = isTablet ? mobileItems : desktopItems;

  const getTitleRef = useCallback((c) => {
    if (c !== null) {
      setTitleRef(c);
    }
  }, []);

  if (props.loading) {
    return (
      <div className="HomePageSlideShow">
        <div className="HomePageSlideShow__wrapper">
          <HomePageSlideShowLoader />
        </div>
      </div>
    );
  }

  if (props.error) {
    return null;
  }

  return (
    <div className="HomeSlider">
      <div className="HomeSlider__wrapper">
        <div className="container" ref={getTitleRef}>
          <div className="HomeSlider__title">
            <TitleWithLine text={props.text} />
          </div>
        </div>
        {!isTablet ? (
          <>
            <Flickity
              flickityRef={(c) => (flickity.current = c)}
              className="carousel"
              elementType="div"
              options={{
                wrapAround: false,
                draggable: true,
                cellAlign:
                  props.items && props.items?.length <= 4 ? "center" : "left",
                freeScroll: true,
                resize: true,
                pageDots: false,
                prevNextButtons: false,
                contain: true,
                bgLazyLoad: true,
                lazyLoad: 1
              }}
              disableImagesLoaded={false}
            >
              <div style={{ width: (titleRef?.offsetLeft || 0) + 15 }} />
              {items?.map((item: any, index: number) => {
                return (
                  <div
                    key={index}
                    className="HomeSlider__slide d-flex flex-column"
                  >
                    {item.map((item: Store) => {
                      const vendorLogo = item?.vendorData?.logo?.sourceUrl;
                      return (
                        <div
                          key={`${item.slug}-${index}`}
                          className="HomeSlider__item"
                        >
                          <ThemeLink to={`/stores/${item.slug}`}>
                            <div className="HomeSlider__item__image">
                              <Image
                                src={item?.vendorData?.background?.sourceUrl}
                                alt={item?.name}
                              />
                            </div>

                            <div className="HomeSlider__item__logo">
                              {vendorLogo ? (
                                <Image src={vendorLogo} alt={item?.name} />
                              ) : (
                                <h2 className="HomeSlider__item__name">
                                  {item?.name}
                                </h2>
                              )}
                            </div>
                          </ThemeLink>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </Flickity>

            <>
              <div
                style={{ left: (titleRef?.offsetLeft || 0) + 15 }}
                className="HomePageSlideShow-box-buttons-prev HomeSlider__prev"
              >
                <div
                  onClick={() => flickity.current?.previous()}
                  className="HomePageSlideShow-box-buttons-prev-wrapper"
                >
                  <PrevButton />
                </div>
              </div>
              <div
                style={{ right: titleRef?.offsetLeft || 0 }}
                className="HomePageSlideShow-box-buttons-next HomeSlider__next"
              >
                <div
                  onClick={() => flickity.current?.next()}
                  className="HomePageSlideShow-box-buttons-next-wrapper"
                >
                  <NextButton />
                </div>
              </div>
            </>
          </>
        ) : (
          <div className="HomePageSlideShow--mobile">
            <div style={{ marginLeft: (titleRef?.offsetLeft || 0) + 15 }} />
            {items?.map((item: any, index: number) => {
              return (
                <div
                  key={index}
                  className="HomeSlider__slide d-flex flex-column"
                >
                  {item.map((item: Store) => {
                    const vendorLogo = item?.vendorData?.logo?.sourceUrl;
                    return (
                      <div
                        key={`${item.slug}-${index}`}
                        className="HomeSlider__item"
                      >
                        <ThemeLink to={`/stores/${item.slug}`}>
                          <div className="HomeSlider__item__image">
                            <Image
                              src={item?.vendorData?.background?.sourceUrl}
                              alt={item?.name}
                            />
                          </div>

                          <div className="HomeSlider__item__logo">
                            {vendorLogo ? (
                              <Image src={vendorLogo} alt={item?.name} />
                            ) : (
                              <h2 className="HomeSlider__item__name">
                                {item?.name}
                              </h2>
                            )}
                          </div>
                        </ThemeLink>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeSlider;
