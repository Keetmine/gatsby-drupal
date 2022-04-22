import React, { Component } from 'react';
import { PopupContext } from '../helpers/context';

class WebFormModal extends Component {
  static contextType = PopupContext

  constructor(props) {
    super(props);
    this.state = {
      form: [],
    };
  }

  componentDidMount() {
    const { togglePopup, title } = this.props;

    // TODO fix this
    const timer = setTimeout(() => {
      const popupBtns = document.querySelectorAll('.show-popup');
      for (const btn of popupBtns) {
        btn.onclick = () => togglePopup();
      }
    }, 100);
    return () => clearTimeout(timer);
  }

  loadWebform = (title) => {
    // getWebform(title)
    //   .then((data) => {
    //     this.setState({ form: data.webform });
    //   },
    //   (error) => {
    //     // eslint-disable-next-line no-console
    //     console.log(error.message);
    //   });
  }

  render() {
    const showPopup = this.context;
    const { form } = this.state;
    const { togglePopup } = this.props;

    if (!showPopup) {
      return null;
    } return (
      <div className="modal show" tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="close" aria-label="Close" onClick={togglePopup}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {/*{form ? <YAMLForm schema={form} /> : ''}*/}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WebFormModal;
