import React, { Component } from 'react';
import Slider from 'react-slick';

class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    const { slides } = this.props;
    return (
      <div>
        <Slider {...settings}>
          {slides && slides.map((slide) => (
            <div key={slide.id}>
              {slide.background_image ? <img src={slide.background_image} alt="" /> : ''}
              <div className={slide.backgroundColor + ' slide-hover-content'}>
                <h3>{slide.backgroundColor}</h3>
                <div className="row">
                  {slide.column.map((column) => (
                    <div
                      key={column.id}
                      className={column.size}
                      dangerouslySetInnerHTML={{ __html: column.content }} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
}

export default SimpleSlider;
