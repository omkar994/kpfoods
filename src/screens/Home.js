import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import Card from '../components/Card.js';
//import Carousel from '../components/Carousel.js';

export default function Home() {

  const [foodItem, setFoodItem] = useState([]);
  const [foodCat, setFoodCat] = useState([]);


  const loadData = async () => {
    let responseFooItm = await fetch("http://localhost:5000/api/getfooitems",
      {
        method: "GET",
        headers: { "Content-Type": "application/json" }


      });
    responseFooItm = await responseFooItm.json();

    let responseFooCat = await fetch("http://localhost:5000/api/getfoocategory",
      {
        method: "GET",
        headers: { "Content-Type": "application/json" }
      });

    responseFooCat = await responseFooCat.json();

    setFoodItem(responseFooItm);
    setFoodCat(responseFooCat);

  };
  useEffect(() => {
    loadData();
  }, [])

  const [search, setSearch] = useState("");
  return (
    <div>
      <div><Navbar /></div>
      <div><div id="carouselExampleControls" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{"objectFit": "contain !important"}}>
            <div className="carousel-caption d-none d-md-block" style={{"zIndex":"5"}}>
                <div className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={(e)=> setSearch(e.target.value)} />
                    {/*<button className="btn btn-success" type="submit">Search</button>*/}
                </div>
            </div>
            <div className="carousel-inner" id="carousel" style={{"objectFit":"contain !important"}}>
                <div className="carousel-item active">
                    <img src="https://images.unsplash.com/photo-1447078806655-40579c2520d6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://images.unsplash.com/photo-1430163393927-3dab9af7ea38?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." />
                </div>
                <div className="carousel-item">
                    <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="d-block w-100" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div></div>
      <div className='container'>
        {
          foodCat !== [] ?
            foodCat.map((category) => {
              return (<div className='row mb-3 mt-3'><div className='fs-4'>{category.CategoryName}</div>
                <hr />
                {
                  foodItem !== [] ?
                    foodItem.filter((item) => { return item.CategoryName === category.CategoryName && item.name.toLowerCase().includes(search); })
                      .map(filterItems => {
                        return (<div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                          <Card foodName={filterItems.name}
                            options={filterItems.options[0]}
                            imgSrc={filterItems.img}></Card>
                        </div>)
                      })
                    : ""
                }
              </div>)
            }) : ""
        }
      </div>
      <div><Footer /></div>
    </div>
  )
}
