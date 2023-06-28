function Content(){
    return (
      <div className="container d-flex justify-content-center mt-3 col-12 col-lg-12">
      <div className="row">
        <div className="col-md-6 stretch-card grid-margin mt-2 mb-4 shadow-sm p-3 mb-2 bg-body rounded">
          <div className="card">
            <img src={process.env.PUBLIC_URL + '/images/pumpkin_leaves.jpg'} alt="Pumpkin Leaves" />
            <div className="card-body">
              <h3 className="card-title">Chibwabwa (Pumpkin Leaves)</h3>
              {/* <p className="card-text">Description.</p> */}
              <a href="#" className="btn btn-primary">Learn more</a>
            </div>
          </div>
        </div>
    
        <div className="col-md-6 stretch-card grid-margin mt-2 mb-4 shadow-sm p-3 mb-2 bg-body rounded">
          <div className="card">
            <img src={process.env.PUBLIC_URL + '/images/blackjack.jpg'} alt="Pumpkin Leaves" />
            <div className="card-body">
              <h3 className="card-title">Kanunka (Blackjack)</h3>
              {/* <p className="card-text">Description.</p> */}
              <a href="#" className="btn btn-primary">Learn more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    )
}

export default Content;