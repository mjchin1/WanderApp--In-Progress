import Dine from "../assets/Dine.png"
import Drink from "../assets/Drink.png"
import Entertainment from "../assets/Entertainment.png"
import Nature from "../assets/Nature.png"
import Dancing from "../assets/Dancing.png"
import Shopping from "../assets/Shopping.png"
import Explore from "../assets/Explore.png"


function ActivityTypes({}) {


  const activityTypes = [

    {
      description: "Dine",
      image: Dine
    },

    {
      description: "Drink",
      image: Drink
    },

    {
      description: "Entertainment",
      image: Entertainment
    },

    {
      description: "Nature",
      image: Nature
    },

    {
      description: "Dancing",
      image: Dancing
    },

    {
      description: "Shopping",
      image: Shopping
    },
    {
      description: "Explore",
      image: Explore
    },
   
  ];


  return (
    <>
      <h1>Where To?</h1>
      {activityTypes.map((type) => (
        <button className="destinationButton">
          {type.description}
         <img className="activityIcon" src={type.image}></img> 
        </button>
      ))}

    </> )
}

export default ActivityTypes;
