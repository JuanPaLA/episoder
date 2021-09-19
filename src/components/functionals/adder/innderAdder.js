import React, {useState, useEffect} from 'react';
import { Carousel, CarouselItem, CarouselControl,CarouselIndicators,CarouselCaption } from 'reactstrap';
import AddDate from './addDate';
import AddFact from './addFact';
import AddThought from './addThought';
import { items } from './adderUtils';

function InnderAdder(props) {
    
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
  
    const next = () => {
      if (animating) return;
      const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
      setActiveIndex(nextIndex);
    }
  
    const previous = () => {
      if (animating) return;
      const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
      setActiveIndex(nextIndex);
    }
  
    const goToIndex = (newIndex) => {
      if (animating) return;
      setActiveIndex(newIndex);
    }
  
    const slides = items.map((item,i) => {
      return (
        <CarouselItem
          className="custom-tag"
          tag="div"
          key={i}
        >
          <CarouselCaption className="text-danger"/>
          <h1 style={{textAlign:'center'}}>{item.topic}</h1>
          {item.topic == 'date' ? <AddDate/> : null}
          {item.topic == 'fact' ? <AddFact/> : null}
          {item.topic == 'thought' ? <AddThought/> : null}
          {item.topic == 'sensation' ? 'coso' : null}
          {item.topic == 'emotion' ? 'coso' : null}
          {item.topic == 'response' ? 'coso' : null}
          {item.topic == 'consequence' ? 'coso' : null}
        </CarouselItem>
      );
    });

    return (
        <div>
        <style>
            {
            `.custom-tag {
                max-width: 100%;
                height: 450px;
                border: black dashed 1px;
                
                }`
            }
        </style>
        <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            interval={false}
        >
            <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl className="car-control" direction="prev"  onClickHandler={previous}/>
            <CarouselControl className="car-control" direction="next"  onClickHandler={next} />
        </Carousel>
        </div>
    );
}

export default InnderAdder;