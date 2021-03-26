import React, { useState } from "react";

import { Base } from "./components";

import ambientOcclusion from "./assets/full_piece_ao.png";
import shadow from "./assets/full_piece_sh.png";
import specular from "./assets/full_piece_sc.png";

import patterns from "./assets/patterns";

function Pattern() {
  return (
    <pattern id="img1" patternUnits="userSpaceOnUse" width="20%" height="20%">
      <image href={patterns.moreLeaves} x="0" y="0" width="400" height="400" />
    </pattern>
  );
}

function App() {
  const [isPattern, setIsPattern] = useState(false);
  const [selectedColor, setSelectedColor] = useState("#563d7c");
  const [selectedPattern, setSelectedPattern] = useState(`url(#img1)`);
  const handleSelectColor = ({ target: { value } }) => {
    setSelectedColor(value);
  };
  const handleSwitchPatternColor = ({ target: { checked } }) => {
    setIsPattern(checked);
  };
  return (
    <main className="container">
      <div className="row">
        <div className="col-3">
          <div className="mb-3">
            <label htmlFor="color_picker" className="form-label">
              Escoge un color
            </label>
            <input
              onChange={handleSelectColor}
              type="color"
              className="form-control form-control-color"
              value={selectedColor}
              id="color_picker"
              placeholder="name@example.com"
            />
          </div>
        </div>
        <div className="col-3">
          <div className="mb-3">
            <div className="form-check form-switch">
              <input
                onChange={handleSwitchPatternColor}
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckChecked"
                checked={isPattern}
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckChecked"
              >
                Usar un patrón
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          <div className="colorer abs_cont shadow rounded">
            <Base
              // style={{ top: "2px" }}
              fill={isPattern ? selectedPattern : selectedColor}
              customDefs={isPattern ? Pattern() : null}
              className="img-fluid fixed_asset base"
            />
            <img
              className="img-fluid fixed_asset ambient_occlusion layer_size"
              src={ambientOcclusion}
              alt=""
            />

            <img
              className="img-fluid fixed_asset shadow layer_size"
              src={shadow}
              alt=""
            />

            <img
              className="img-fluid fixed_asset specular layer_size"
              src={specular}
              alt=""
            />

            <Base fill="none" className="img-fluid fixed_asset base" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
