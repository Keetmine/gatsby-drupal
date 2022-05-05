import React, { Component } from 'react';
import { PopupContext } from '../helpers/context';
import Webform from "gatsby-drupal-webform";
import {graphql, useStaticQuery} from "gatsby";
import {useState} from "react";


export const Form = () => {
  const data = useStaticQuery(graphql`
    query webFormQuery {
      webformWebform(drupal_internal__id: {eq: "contact"}) {
        id
        title
        drupal_internal__id
        elements {
          name
          attributes {
            name
            value
          }
          options {
            label
            value
          }
          type
        }
      }
    }
  `)
  const [submitted, setSubmitted] = useState(false)
  console.log(data)
  return (
    <Webform
      id="contact_webform"
      webform={data.webformWebform}
      endpoint={'http://tr3.loc/react_webform_backend/submit'}
      onSuccess={() => {
        setSubmitted(true)
      }}
    />
  )
}

class WebFormModal extends Component {
  static contextType = PopupContext

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

  render() {
    const showPopup = this.context;
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
              <Form />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WebFormModal;
