import React, {useEffect, useState} from 'react';
import SimpleSlider from "./slider";
import GoogleMapReact from 'google-map-react';

const ContentSections = ({section}) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => setIsMounted(true), []);
  return (
    isMounted ? (
      <section
        id={section.content_id}
        key={section.id}
        className={`section  ${section.styles.join(' ')} content-section ${section.background_image ? 'bg-image' : ''}`}
        style={{backgroundImage: section.background_image ? (`url(${section.background_image})`) : ''}}
      >
        <div className="container">
          {section.title ? <h1 dangerouslySetInnerHTML={{__html: section.title}}/> : ''}
          {section.columns ? (
            <div className="row">
              {section.columns.map((column) => (
                <>
                  <div key={column.id} className={`${column.size} ${column.text_size} column`}>
                    <div dangerouslySetInnerHTML={{__html: column.content}} />
                    {column.map ? (
                      <div style={{height: column.map.field_map.height, width: '100%'}}>
                        <GoogleMapReact
                          defaultCenter={{lat: Number(column.map.field_map.lat), lng: Number(column.map.field_map.lon)}}
                          defaultZoom={Number(column.map.field_map.zoom) + 4}
                        />
                      </div>
                    ) : ''}
                  </div>
                </>
              ))}
            </div>
          ) : ''}
          {section.slideshow ? <SimpleSlider slides={section.slideshow}/> : ''}
        </div>
      </section>
    ) : ''
  );
};

export default ContentSections;
