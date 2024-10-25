import Dine from "../assets/Dine.png"
import Drink from "../assets/Drink.png"
import Entertainment from "../assets/Entertainment.png"
import Nature from "../assets/Nature.png"
import Dancing from "../assets/Dancing.png"
import Shopping from "../assets/Shopping.png"
import Explore from "../assets/Explore.png"


function ActivityTypes({setActivityPhoto, setActivityDescription}) {


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
      description: "Dance",
      image: Dancing
    },

    {
      description: "Shop",
      image: Shopping
    },
    {
      description: "Explore",
      image: Explore
    },
   
  ];


  return (
    <>
      <h1>What kind of activity is this?</h1>
      {activityTypes.map((type) => (
        <button className="activityTypeButton" onClick={()=>{
          setActivityDescription(type.description)
          setActivityPhoto(type.image)
        }}>
          {type.description} <br/> <br/>
         <img className="activityIcon" src={type.image}></img> 
        </button>
      ))}

    </> )
}

export default ActivityTypes;
