import React from "react";

export default function CurrentWeatherCard() {
  return (
    <>
      <div className="current-weather-container flex justify-center mt-3 ">
        <div className="current-weather-card flex transition shadow-xl 5 rounded-xl max-w-2xl bg-sky-300">
          <div className="sideways-card-title rotate-180 p-2 [writing-mode:_vertical-lr]">
            <p className="text-center"></p>
          </div>

          <div className="card-left-dog-image hidden sm:block sm:basis-56">
            <img
              alt="Labrador puppy dog"
              src="https://jooinn.com/images/dog-67.jpg"
              className="aspect-square h-full w-full object-cover"
            />
          </div>

          <div className="card-right">
            <div className="card-right-left-side flex flex-1 flex-col justify-between">
              <img
                className="weather-icon large"
                src="src/images/sun.svg"
                data-current-icon
              />
              <div className="card-right-current-temp">
                <span data-current-temp>31</span>&deg;
              </div>
            </div>
            <div className="card-right-right-side">
              <div className="info-group">
                <div className="label">High</div>
                <div>
                  <span data-current-high>32</span>&deg;
                </div>
              </div>
              <div className="info-group">
                <div className="label">FL High</div>
                <div>
                  <span data-current-fl-high>27</span>&deg;
                </div>
              </div>
              <div className="info-group">
                <div className="label">Wind</div>
                <div>
                  <span data-current-wind>
                    <span className="value-sub-info">9</span>
                  </span>
                  mph
                </div>
              </div>
              <div className="info-group">
                <div className="label">Low</div>
                <div>
                  <span data-current-low>19</span>&deg;
                </div>
              </div>
              <div className="info-group">
                <div className="label">FL Low</div>
                <div>
                  <span data-current-fl-low>12</span>&deg;
                </div>
              </div>
              <div className="info-group">
                <div className="label">Precip</div>
                <div>
                  <span data-current-precip>
                    <span className="value-sub-info">0.1</span>
                  </span>
                  in
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
