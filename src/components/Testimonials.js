import React from 'react';
import Card from './Card';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { useState } from 'react';

const Testimonials = (props) => {
  let reviews = props.reviews;
  const [index, setIndex] = useState(0);

  function leftShiftHandler() {
    if (index - 1 < 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
    console.log('Left Shift:', index);
  }

  function rightShiftHandler() {
    if (index + 1 >= reviews.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
    console.log('Right Shift:', index);
  }

  function surpriseHandler() {
    let randomIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randomIndex);
    console.log('Surprise:', randomIndex);
  }

  return (
    <div style={{ width: '400px', marginLeft: '490px', backgroundColor: 'violet', marginTop: '100px', padding: '50px' }}>
      <div>
        <Card review={reviews[index]}> </Card>
      </div>
      <div>
        <button onClick={leftShiftHandler} className='cursor-pointer hover:text-violet-500'>
          <FiChevronLeft />
        </button>
        <button onClick={rightShiftHandler} className='cursor-pointer hover:text-violet-500'>
          <FiChevronRight />
        </button>
      </div>
      <button onClick={surpriseHandler}>Surprise</button>
    </div>
  );
};

export default Testimonials;
