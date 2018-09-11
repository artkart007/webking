import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  // CarouselCaption
} from 'reactstrap';
import './Home.css'
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Career from './Career';
const items = [
  {
    id: '1',
    altText: 'Slide 1',
    caption: 'Slide 1',
    component : <Services/>
  },
  {
    id: '2',
    altText: 'Slide 2',
    caption: 'Slide 2',
    component : <About/>

  },
  {
    id: '3',
    altText: 'Slide 3',
    caption: 'Slide 3',
    component : <Contact/>

  },
  {
    id: '4',
    altText: 'Slide 4',
    caption: 'Slide 4',
    component : <Career/>

  }
];

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  
  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          on
          Exiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          {/* <img src={item.src} alt={item.altText} /> */}
          <div className="divStyle">
            {item.component}
            </div>
          {/* <CarouselCaption captionText={item.caption} captionHeader={item.caption} /> */}
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default Home;
