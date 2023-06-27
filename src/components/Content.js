function Content(){
    return (
        <div class="container d-flex justify-content-center  mt-5 col-12 col-lg-12">
            <div class="row">
              <div class="col-md-6 stretch-card grid-margin mt-2" >
                <div class="card">
                <img src={process.env.PUBLIC_URL + '/images/pumpkin_leaves.jpg'} alt="Pumpkin Leaves" />;
                  <div class="card-body">
                    <h3 class="card-title">Chibwabwa (Pumpkin Leaves)</h3>
                    {/* <p class="card-text">Description.</p> */}
                    <a href={"#"} class="btn btn-primary">Learn more</a>
                  </div>
                </div>
              </div>
              
              <div class="col-md-6 stretch-card grid-margin mt-2">
                <div class="card">
                <img src={process.env.PUBLIC_URL + '/images/blackjack.jpg'} alt="Pumpkin Leaves" />;
                  <div class="card-body">
                    <h3 class="card-title">Kanunka (Blackjack)</h3>
                    {/* <p class="card-text">Description.</p> */}
                    <a href={"#"} class="btn btn-primary">Learn more</a>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}

export default Content;