import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'

const Favorites = () => {
  const [ selectedFood, setSelectedFood ] = useState({
    fruits:"",
    meat:"",
    fish:""
  });

  const [ SearchParams, setSearchParams ] = useSearchParams();

  const FOOD_OPTIONS = {
    fruits:["orange", "apple", "banana"],
    meat:["chicken", "meat", "beef"],
    fish:["tuna", "salmon", "yellowtail"]
  };

  const foodKeys = Object.keys(FOOD_OPTIONS);
  
  useEffect(() => {
    selectedFood.fruits !== "" &&
    selectedFood.meat !== "" &&
    selectedFood.fish !== "" &&
    setSearchParams(selectedFood)
  },[selectedFood]);

  return (
    <>
        {
            foodKeys.map(foodKey => {
                return (
                    <div key={foodKey}>
                        {
                            (FOOD_OPTIONS[foodKey as keyof object] as Array<string>).map(food => {
                                return (
                                    <label key={food}>
                                        <input 
                                            type="radio"
                                            name={foodKey}
                                            value={food}
                                            checked={ food === selectedFood[foodKey as keyof object]}
                                            onChange={(e) => setSelectedFood(prev => ({...prev, [e.target.name]:e.target.value}))}
                                        />
                                        {food}
                                    </label>
                                )
                            })
                        }
                    </div>
                )
            })
        }
        {
            selectedFood.fruits !== "" &&
            selectedFood.meat !== "" &&
            selectedFood.fish !== "" ?
            <Link to={`/confirm?fruits=${selectedFood.fruits}&meat=${selectedFood.meat}&fish=${selectedFood.fish}`}>確認ページ</Link> :
            <h3>全て選択しなければ先に進めません。</h3>
        }
    </>
  )
}

export default Favorites