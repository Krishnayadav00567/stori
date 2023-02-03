import React, { useState } from "react";
import Stories, {WithSeeMore} from 'react-insta-stories';
import Showmore from "./Stories";
// const { WithSeeMore } from 'react-insta-stories';

const Stori = () => {
   

    // const CustomStoryContent = ({ story, action }) => {
    //     return <WithSeeMore story={story} action={action}>
    //         <div>
    //             <h1>Hello!</h1>
    //             <p>This story would have a 'See More' link at the bottom ✨</p>
    //         </div>
    //     </WithSeeMore>
    // }

    const [stories,setStories] = useState([
        {type:'image',url:'https://loremflickr.com/320/240/brazil,rio' },
        {url:'https://loremflickr.com/g/320/240/paris,girl/all' }
    ]);

    
    
  return (
    <>
		<Stories
            key={'mew'}
			stories={stories}
            currentIndex={0}
			defaultInterval={5500}
			width={432}
			height={768}
            loop={true}
            keyboardNavigation={true}
            

            
		/>
    </>
  );



};

export  default Stori;
