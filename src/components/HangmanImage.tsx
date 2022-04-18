import React from 'react';
import image0 from '../images/image_0.jpg';
import image1 from '../images/image_1.jpg';
import image2 from '../images/image_2.jpg';
import image3 from '../images/image_3.jpg';
import image4 from '../images/image_4.jpg';
import image5 from '../images/image_5.jpg';
import image6 from '../images/image_6.jpg';
import image7 from '../images/image_7.jpg';
import image8 from '../images/image_8.jpg';
import image9 from '../images/image_9.jpg';
import image10 from '../images/image_10.jpg';

const imgArray: Array<any> = [image0, image1, image2, image3, image4, image5, image6, image7, image8, image9, image10]

type HangmanImageProps = {
    tryCount: number,
}

const getImage = (count: number): any => {
    const min = Math.min(10, count)
    return imgArray[min]
}

const HangmanImage = (props: HangmanImageProps) => {
    return (
        <div className="hangman-image">
            <img src={getImage(props.tryCount)}/>
            <p>{props.tryCount}/10</p>
        </div>
    )
}

export default HangmanImage