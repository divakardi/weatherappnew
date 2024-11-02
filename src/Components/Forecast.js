
import React from "react";

const Forecast = ({ forecastWeather, location }) => {
  return (
    <div className="container mt-3">
      <h4 className="text-white text-center">
        Forecast weather of {location.name}, {location.region}
      </h4>
      {forecastWeather.forecastday.map((data, index) => {
        return (
          <div
            key={index}
            className="accordion accordion-flush"
            id="accordionFlushExample"
          >
            <div className="accordion-item">
              <h2 className="accordion-header" id={`flush-heading${index}`}>
                <button
                  className="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#flush-collapse${index}`}
                  aria-expanded="false"
                  aria-controls={`flush-collapse${index}`}
                >
                  <div className="d-flex flex-row mb-3">
                    <div className="p-2">{data.date}</div>
                    {/* Corrected `img` tag */}
                    <div className="p-2">
                      <img src={data.day.condition.icon} alt="Weather icon" />
                    </div>
                    <div className="p-2">Max temp: {data.day.maxtemp_c}°C</div>
                    
                  </div>
                </button>
              </h2>
              <div
                id={`flush-collapse${index}`}
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Day{data.hour.map((hourData, hourIndex) => {
                    return (
                      <div key={hourIndex}>
                        <h6>
                          {hourData.time} - Max temp: {hourData.temp_c}°C
                          <img src={data.day.condition.icon} alt="Weather icon" />
                        </h6>
                        <div
                          className="progress"
                          role="progressbar"
                          aria-valuenow={hourData.temp_c}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        >
                          {/* Updated progress bar */}
                          <div
                            className="progress-bar progress-bar-striped"
                            style={{ width: `${hourData.temp_c}%` }}
                          ></div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Forecast;
