import React from 'react'

export default function Carousel() {
    return (
        <div ><div id="carouselExampleControls" className="carousel slide carousel-fade" data-bs-ride="carousel" style={{"objectFit": "contain !important"}}>
            <div className="carousel-caption d-none d-md-block" style={{"zIndex":"5"}}>
                <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-success" type="submit">Search</button>
                </form>
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
    )
}
