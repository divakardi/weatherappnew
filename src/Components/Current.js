import React from "react";



const Current = ({currentWeather,location})=>{
    return(
        <div className="container mt-3">
        <h4 className="text-white text-center">Current Weather of{location.name},{location.region} </h4>
        <div className="row">
            {/* Col-1 */}
            <div className="col-3">
            <div class="card">
  
  <div class="card-body" >
    <h5 class="card-title"><img src={currentWeather.condition.icon} class="card-img-top" alt="..."/>{currentWeather.condition.text} </h5>
    
  </div>
</div>
            </div>

            {/* Col-2 */}
            <div className="col-3">
            
            <div class="card">
  
  <div class="card-body">
    <h5 class="card-title">Temp in c{currentWeather.temp_c}</h5>
    
  </div>
            </div>
            </div>

            {/* Col-3 */}
            <div className="col-3">
            <div class="card">
  
  <div class="card-body">
    <h5 class="card-title">Temp in f {currentWeather.temp_f}</h5>
    
  </div>
            </div>
            </div>

            {/* Col-4 */}
            <div className="col-3">
            <div class="card">
  
  <div class="card-body">
    <h5 class="card-title">Temp in h{currentWeather.humidity}</h5>
    
  </div>
            </div>
            </div>
            <br></br>


            <div className="col-3">
            
            <div class="card">
  
  <div class="card-body">
    <h5 class="card-title">wind in D{currentWeather.wind_degree}</h5>
    
  </div>
            </div>
            </div>


            <div className="col-3">
            
            <div class="card">
  
  <div class="card-body">
    <h5 class="card-title">wind in k{currentWeather.wind_kph}</h5>
    
  </div>
            </div>
            </div>



            <div className="col-3">
            
            <div class="card">
  
  <div class="card-body">
    <h5 class="card-title">wind in m {currentWeather.wind_mph}</h5>
    
  </div>
            </div>
            </div>

            <div className="col-3">
            
            <div class="card">
  
  <div class="card-body">
    <h5 class="card-title">wind in dir{currentWeather.wind_dir}</h5>
    
  </div>
            </div>
            </div>
        </div>
        </div>
    )
}
export default Current;