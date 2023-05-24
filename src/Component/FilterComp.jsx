import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

const FilterComp = () => {
  const [searchParams,setSearchParams]=useSearchParams();

  // filter category Sortings
  const initialCategoryFilter=searchParams.getAll("category");
  console.log(initialCategoryFilter);
  const [category,setCategory] =useState(initialCategoryFilter || []);

// Sortings 
const initialSortBy=searchParams.getAll("sortBy");

  const [sortBy,setSortBy]=useState(initialSortBy [0] || "");

  const handleSort=(e)=>{
    setSortBy(e.target.value);
  }

  const handleFilterCheckbox=(e)=>
  {
    // console.log(e.target.value);
    const newCategories=[...category];
    // console.log(newCategories,category);
    
    if(newCategories.includes(e.target.value)){
      // remove its
      newCategories.splice(newCategories.indexOf(e.target.value),1);
    }
    else{
      // adding
      newCategories.push(e.target.value);
    }
    setCategory(newCategories);
  }
  // console.log(category);
 
  useEffect(()=>
  {
    if(category || sortBy){
      console.log(category);

      let params={};

      category && (params.category = category);

      sortBy && (params.sortBy = sortBy);
      // console.log(params);

      setSearchParams(params);

    }
  },[category,setSearchParams,sortBy]);

  console.log("SORTby",sortBy);


  return (
    <div>
      Filter
      <div>
      <input type="checkbox" value="Novel"  onChange={handleFilterCheckbox}
      checked={category.includes("Novel")}

      />
      <label>Novel</label>
      </div>

      <div>
      <input type="checkbox" value="Motivational" onChange={handleFilterCheckbox}
      checked={category.includes("Motivational")}
      />

      <label>Motivational</label>
      </div>

      <div>
      <input type="checkbox" value="Science_Fiction" onChange={handleFilterCheckbox}
      checked={category.includes("Science_Fiction")}

      />
      <label>Science Fiction</label>
      </div>

      <div>
      <input type="checkbox" value="Thriller" onChange={handleFilterCheckbox}
      checked={category.includes("Thriller")}

      />
      <label>Thriller</label>
      </div>

      <div onChange={handleSort}>

      <h3>Sort Comp</h3>
      <input type="radio" value="asc" name="sortBy"
      defaultChecked={sortBy ==="asc"}
      />
      <label>Ascending</label>
      <br />
      <input type="radio" value="desc" name="sortBy"
       defaultChecked={sortBy ==="desc"}
      />
      <label>Descending</label>
      </div>
    </div>
    
    
  )
}

export default FilterComp
