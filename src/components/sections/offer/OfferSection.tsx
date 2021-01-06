import Grid from "@material-ui/core/Grid/Grid";
import Paper from "@material-ui/core/Paper";
import makeStyles from "@material-ui/core/styles/makeStyles";
import React from "react";
import useHasBeenDisplayed from "../../../utils/hooks/useHasBeenDisplayed";
import GrowOnDisplayed from "../../miscelanous/GrowOnDisplayed";
import SectionTitle from "../components/SectionTitle";
import SectionBox from "../SectionBox";
import { sectionsSettings } from "../SectionsSettings";
import offerSectionSettings from "./OfferSectionSettings";
import OfferTile from "./OfferTile";

interface Props {}

const OfferSection = (props: Props) => {

  return (
    <SectionBox sectionId="offer-section"> 
      <Grid container spacing={3} justify="space-between" alignItems="stretch">
        {
          offerSectionSettings.offers.map((e) => 
            <Grid item xs={12} sm={3}>
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
    </SectionBox>
  );
};

export default OfferSection;
