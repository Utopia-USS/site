import React from "react";
import sleep from "../../utils/sleep";
import { navBarSettings } from "./NavBarSettings";
import NavBarView from "./NavBarView";
import _ from 'lodash';

interface State {
  previousOffset: number;
  vericalTranslatePx: number;
  heightPx: number;
  mobileMenuAnchorEl?: Element;
};

export class NavBar extends React.Component<any, State> {
  readonly state: State = {
    previousOffset: 0,
    vericalTranslatePx: 0,
    heightPx: navBarSettings.maxHeightPx,
  }

  handleScroll = () => {
    const offset = document.documentElement.scrollTop;
    const newState = onScrollOffset(offset, this.state);
    const setState = () => this.setState(newState);
    const {delayMs} = navBarSettings;
    delayMs === 0 ? setState() : delay(delayMs, setState);
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  onMobileMenuIconClicked = (event: React.MouseEvent) => {
    this.setState({mobileMenuAnchorEl: event.target as Element});
  }

  onMobileMenuClosed = () => {
    this.setState({mobileMenuAnchorEl: undefined});
  }


  render() {
    const {vericalTranslatePx, heightPx} = this.state;
    return (
      <NavBarView 
      vericalTranslatePx={vericalTranslatePx} 
      height={heightPx} 
      onMobileMenuIconClicked={this.onMobileMenuIconClicked}
      mobileMenuAnchorEl={this.state.mobileMenuAnchorEl}
      onMobileMenuClose={this.onMobileMenuClosed}
      />
    );
  }
}

function onScrollOffset(offset: number, oldState: State): State {
  // Shrinking phase
  if(offset < shrinkingPhaseOffset()) 
  {
    return {
      heightPx: navBarSettings.maxHeightPx - offset / navBarSettings.scrollToBarTranslationFactor,
      previousOffset: offset,
      vericalTranslatePx: 0,
    };
  } 
  else 
  {
    const oldTranslate = oldState.vericalTranslatePx;
    const oldScrollOffset = oldState.previousOffset;
    return {
      heightPx: navBarSettings.minHeightPx,
      previousOffset: offset,
      vericalTranslatePx: Math.max(
        - navBarSettings.minHeightPx, 
        Math.min(0, oldTranslate + (oldScrollOffset - offset) / navBarSettings.scrollToBarTranslationFactor)),
    }
  }
}

function shrinkingPhaseOffset(): number {
  return (navBarSettings.maxHeightPx - navBarSettings.minHeightPx)
      * navBarSettings.scrollToBarTranslationFactor;
}

async function delay(millisec: number, executee: () => void) {
  await sleep(millisec);
  executee();
}