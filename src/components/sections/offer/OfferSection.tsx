import Grid from "@material-ui/core/Grid/Grid";
import React from "react";
import GrowOnDisplayed from "../../miscelanous/GrowOnDisplayed";
import SectionBox from "../SectionBox";
import offerSectionSettings from "./OfferSectionSettings";
import OfferTech from "./OfferTech";
import OfferTile from "./OfferTile";

interface Props {}

const OfferSection = (props: Props) => {

  return (
    <SectionBox sectionId="offer-section"> 
      <Grid container spacing={3} justify="center" alignItems="stretch">
        {
          offerSectionSettings.offers.map((e) => 
            <Grid item container justify="center" xs={12} sm={4} key={e.title.en + "offer"}>
              <GrowOnDisplayed>
                <OfferTile 
                title={e.title} 
                description={e.description} 
                image={e.image}
                imageAlt={e.imageAlt} />
              </GrowOnDisplayed>
            </Grid>
          )
        }
      </Grid>
      <OfferTech/>
    </SectionBox>
  );
};

export default OfferSection;
