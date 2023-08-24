import React, { useEffect, useState } from "react";
import Faq from "react-faq-component";
import Header from '../component/Header';
import Footer from '../component/Footer';
import "./pages.css";

import axios from "../helper/axios";


import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import AccordionSummary from "@material-ui/core/AccordionSummary";
  

const styles = {
    // bgColor: 'white',
    titleTextColor: "blue",
    rowTitleColor: "blue",
    // rowContentColor: 'grey',
    // arrowColor: "red",
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};



export default function Faqs() {

    // const data = {
    //     title: "Frequently asked questions",
    //     rows: 
    //     [
    //         {
    //             title: "Lorem ipsum dolor sit amet,",
    //             content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sed tempor sem. Aenean vel turpis feugiat,
    //               ultricies metus at, consequat velit. Curabitur est nibh, varius in tellus nec, mattis pulvinar metus.
    //               In maximus cursus lorem, nec laoreet velit eleifend vel. Ut aliquet mauris tortor, sed egestas libero interdum vitae.
    //               Fusce sed commodo purus, at tempus turpis.`,
    //         },
    //         {
    //             title: "Nunc maximus, magna at ultricies elementum",
    //             content:
    //                 "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam, vitae convallis ex tortor sed dolor.",
    //         },
    //         {
    //             title: "Curabitur laoreet, mauris vel blandit fringilla",
    //             content: `Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc, ac sagittis leo elit vel lorem.
    //             Fusce tempor lacus ut libero posuere viverra. Nunc velit dolor, tincidunt at varius vel, laoreet vel quam.
    //             Sed dolor urna, lobortis in arcu auctor, tincidunt mattis ante. Vivamus venenatis ultricies nibh in volutpat.
    //             Cras eu metus quis leo vestibulum feugiat nec sagittis lacus.Mauris vulputate arcu sed massa euismod dignissim. `,
    //         },
    //         {
    //             title: "What is the package version",
    //             content: <p>current version is 1.2.1</p>,
    //         },
    //     ],
    // };

    const [allProduct,setAllProduct] = useState([]);

const apiData=async()=>{
    const res= await axios.post("/FaqGet");
    console.log(res?.status);
    console.log("----------res.data-----------", res.data)
    if(res.status===200){
      setAllProduct(res?.data[0]);
    }else{
      setAllProduct()
    }
  }

  useEffect(() => {
    // console.log(editorState);
    apiData();
  }, []);

  const faqList = allProduct.faqlist;
  console.log("----------res.data--faqList--------", faqList)
  

  return ( 
    <>
    <Header/>
    <div className='container mx-auto'>
        <div className="Cart mt-heading">
            <div className="p-0-mobile container wishlist">  
                <div className="">
                    <div className="CartItem fade-in-down"> 
                        <div className="CartItem__content inner-pages"> 
                        {/* <Faq
                        data={data}
                        styles={styles}
                        config={config}
                        />   */}

                    {faqList?.map((dt, index)=>(
                        // <Accordion style={{ width: 400 }}>
                        <Accordion>
                        
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            >
                            <Typography
                                style={{
                                fontWeight: 10,
                                }}
                            >
                                <h3>{dt.title}</h3>
                            </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>{dt.description}</Typography>
                            </AccordionDetails>
                        
                        </Accordion>
                        ))}
                    </div>
                </div>
              </div> 
           
                
            </div>
        </div>
    </div>
    <Footer/> 
    </> 
  )
}
 