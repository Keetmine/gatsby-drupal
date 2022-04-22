import * as React from 'react'
import {useSiteMetadata} from "../../hooks/use-site-metadata";
import Header from "../header";
import WebFormModal from "../webFormModal";
import { PopupContext, showPopup } from '../../helpers/context';

export const TitlePage = ({pageTitle}) => {
  const {title} = useSiteMetadata()
  return (
    <title>{pageTitle} | {title}</title>
  );
}

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowPopup: showPopup.hide,
    };

    this.togglePopup = () => {
      this.setState((state) => ({
        isShowPopup: state.isShowPopup === showPopup.show ? showPopup.hide : showPopup.show,
      }));
    };
  }

  render() {
    const {children, pageTitle} = this.props;
    const {isShowPopup} = this.state;

    return (
      <PopupContext.Provider value={isShowPopup}>
        <TitlePage pageTitle={pageTitle} />
        <Header/>
        <main>
          {children}
        </main>
        <WebFormModal title="Let’s begin the conversation!" togglePopup={this.togglePopup}/>
      </PopupContext.Provider>
    )
  }
}

export default Layout