import React, { useState } from "react";
import { Base } from "./components";
import ambientOcclusion from "./assets/full_piece_ao.png";
import shadow from "./assets/full_piece_sh.png";
import specular from "./assets/full_piece_sc.png";
import patterns from "./assets/patterns";

let gloss = [
  { texture: patterns.cinderSpark, title: "Cinder Spark Red" , isTexture: true },
  { texture: patterns.redMetallic, title: "Red Metallic" , isTexture: true },
  { texture: patterns.dragonFire, title: "Dragon Fire Red" , isTexture: true },
  { texture: "#cd2027", title: "Dark Red" , isTexture: false },
  { texture: "#ce1c1e", title: "Flame Red" , isTexture: false },
  { texture: "#da3526", title: "Hot Rod Red" , isTexture: false },
  { texture: patterns.fieryOrange, title: "Fiery Orange" , isTexture: true },
  { texture: patterns.liquidCooper, title: "Liquid Copper" , isTexture: true },
  { texture: "#f47a20", title: "Burnt Orange" , isTexture: false },
  { texture: "#f57d20", title: "Deep Orange" , isTexture: false },
  { texture: "#f28521", title: "Bright Orange" , isTexture: false },
  { texture: "#efad1d", title: "Sunflower" , isTexture: false },
  { texture: "#eab637", title: "Lemon Sting" , isTexture: false },
  { texture: "#ffc80b", title: "Bright Yellow" , isTexture: false },
  { texture: "#fff32a", title: "Lucid Yellow" , isTexture: false },
  { texture: "#066440", title: "Green Envy" , isTexture: false },
  { texture: "#0d9247", title: "Kelly Green" , isTexture: false },
  { texture: "#77bf4e", title: "Light Green" , isTexture: false },
  { texture: "#0b9892", title: "Atomic Teal" , isTexture: false },
  { texture: "#0f0e0e", title: "Midnight Blue" , isTexture: false },
  { texture: "#0e1826", title: "Boat Blue" , isTexture: false },
  { texture: "#213369", title: "Deep Blue Metallic" , isTexture: false },
  { texture: "#25366f", title: "Blue Metallic" , isTexture: false },
  { texture: "#2a2c79", title: "Blue Raspberry" , isTexture: false },
  { texture: "#184a9e", title: "Cosmic Blue" , isTexture: false },
  { texture: "#0954a0", title: "Intense Blue" , isTexture: false },
  { texture: "#026a9a", title: "Blue Fire" , isTexture: false },
  { texture: "#465f79", title: "Ice Blue" , isTexture: false },
  { texture: "#51c6ea", title: "Sky Blue" , isTexture: false },
  { texture: "#b22467", title: "Fierce Fuchsia" , isTexture: false },
  { texture: "#e3487e", title: "Hot Pink" , isTexture: false },
  { texture: "#3b1d1e", title: "Black Rose" , isTexture: false },
  { texture: "#422772", title: "Plum Explosion" , isTexture: false },
  { texture: "#180034", title: "Wicked" , isTexture: false },
  { texture: "#200807", title: "Ember Black" , isTexture: false },
  { texture: "#181d0f", title: "Galaxy Black" , isTexture: false },
  { texture: "#0e0e0e", title: "Black Metallic" , isTexture: false },
  { texture: "#050708", title: "Black" , isTexture: false },
  { texture: "#3c3c3c", title: "Anthracite" , isTexture: false },
  { texture: "#424240", title: "Charcoal Metallic" , isTexture: false },
  { texture: "#313f4f", title: "Glaciar Gray" , isTexture: false },
  { texture: "#918f8f", title: "White Aluminium" , isTexture: false },
  { texture: "#979796", title: "Sterling Silver" , isTexture: false },
  { texture: "#a5a3a1", title: "Storm Gray" , isTexture: false },
  { texture: "#fdfbf4", title: "White Gold Sparkle" , isTexture: false },
  { texture: "#ffffff", title: "White" , isTexture: false },
  { texture: "#fbe4af", title: "Light Ivory" , isTexture: false },
  { texture: "#93732c", title: "Gold Metallic" , isTexture: false },

]

let texture = [
  { texture: patterns.militaryG, title: "Shadow Military Green" , isTexture: true },
  { texture: patterns.militaryG, title: "Shadow Military Black" , isTexture: true },
  { texture: patterns.brushedB, title: "Brushed Black Metallic" , isTexture: true },
  { texture: patterns.matrixB, title: "Matrix Black" , isTexture: true },
  { texture: patterns.carbonB, title: "Carbon Fiber Black" , isTexture: true },
  { texture: patterns.brushedB, title: "Brushed Steel" , isTexture: true },
  { texture: patterns.brushedB, title: "Brushed Titanium" , isTexture: true },
  { texture: patterns.brushedA, title: "Brushed Aluminum" , isTexture: true },
  { texture: patterns.carbonB, title: "Carbon Fiber Anthracite" , isTexture: true },
  { texture: patterns.carbonB, title: "Carbon Fiber White" , isTexture: true },
];

let matte = [
  { texture: "#861f23", title: "Red Metallic" , isTexture: false },
  { texture: "#ee3d36", title: "Red" , isTexture: false },
  { texture: "#f68620", title: "Orange" , isTexture: false },
  { texture: "#294c34", title: "Pine Green Metallic" , isTexture: false },
  { texture: "#3f441d", title: "Military Green" , isTexture: false },
  { texture: "#1f2935", title: "Indigo" , isTexture: false },
  { texture: "#1a294b", title: "Slate Blue Metallic" , isTexture: false },
  { texture: "#2d64ae", title: "Blue Metallic" , isTexture: false },
  { texture: "#1682c2", title: "Riviera Blue" , isTexture: false },
  { texture: "#050708", title: "Black" , isTexture: false },
  { texture: "#1e1f1e", title: "Black Metallic" , isTexture: false },
  { texture: "#222222", title: "Deep Black" , isTexture: false },
  { texture: "#393a3c", title: "Dead Matte Black" , isTexture: false },
  { texture: "#414141", title: "Dark Gray" , isTexture: false },
  { texture: "#7e7e7d", title: "Gray Aluminium" , isTexture: false },
  { texture: "#939598", title: "Silver" , isTexture: false },
  { texture: "#fafafa", title: "White" , isTexture: false },
  { texture: "#514b3d", title: "Charcoal Metallic" , isTexture: false },
  { texture: "#654f36", title: "Brown Metallic" , isTexture: false },
  { texture: "#915f30", title: "Copper Metallic" , isTexture: false },
]

let satin = [
  { texture: "#6a0c10", title: "Vampire Red" , isTexture: false },
  { texture: "#971b1e", title: "Smoldering Red" , isTexture: false },
  { texture: "#d1582e", title: "Canyon Copper" , isTexture: false },
  { texture: "#cb9937", title: "Bitter Yellow" , isTexture: false },
  { texture: "#489c45", title: "Apple Green" , isTexture: false },
  { texture: "#69c8ca", title: "Key West" , isTexture: false },
  { texture: "#01829c", title: "Ocean Shimmer" , isTexture: false },
  { texture: "#0070aa", title: "Perfect Blue" , isTexture: false },
  { texture: "#303842", title: "Thundercloud" , isTexture: false },
  { texture: "#383739", title: "Dark Gray" , isTexture: false },
  { texture: "#1b1718", title: "Black" , isTexture: false },
  { texture: "#1e1a14", title: "Gold Dust Black" , isTexture: false },
  { texture: "#768284", title: "Battleship Gray" , isTexture: false },
  { texture: "#c9c5c5", title: "White Aluminum" , isTexture: false },
  { texture: "#e5e9e2", title: "Frozen Vanilla" , isTexture: false },
  { texture: "#f9fafa", title: "White" , isTexture: false },
  { texture: "#f0ead6", title: "Pearl White" , isTexture: false },
  { texture: "#966e56", title: "Caramel Luster" , isTexture: false },
]

let colorFlip = [
  { texture: "#6a0c10", title: "Prueba" , isTexture: false },
]

function Pattern(current) {
  return (
    <pattern id="img1" patternUnits="userSpaceOnUse" width="40%" height="40%">
      <image href={current} x="0" y="0" width="400" height="400" />
    </pattern>
  );
}

function App() {
  const [isPattern, setIsPattern] = useState(false);
  const [selectedColor, setSelectedColor] = useState("#563d7c");
  const [selectedPattern, setSelectedPattern] = useState(`url(#img1)`);
  const [currentPattern, setCurrentPattern] = useState(patterns.carbon);

  return (
    <main className="container-fluid vh-100">
      <div className="row">
        <div className="col-12 my-3">
          <h2 className="font-weight-bold" >Configurator</h2>
        </div>
      </div>

      <div className="row">
        <div className="col-6">

          <div className="row">
            <div className="col-12">
              <p>Gloss <span>Select one</span> </p>
              <div className="container-12pzas mb-3 ">
                {gloss.map(({texture, title, isTexture},i)=>(
                  <img
                    key = {i}
                    title = {title}
                    src={texture}
                    onError={(e)=>{e.target.onerror = null; e.target.src=patterns.auxiliar}}
                    style={{background: texture}}
                    className="img-selection m-1"
                    onClick={()=>{
                      if(isTexture){
                        setIsPattern(true);
                        setCurrentPattern(texture);
                      }else{
                        setIsPattern(false);
                        setSelectedColor(texture);
                      }
                    }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <p>Satin</p>
              <div className="container-5pzas  mb-3 ">
                {satin.map(({texture, title, isTexture},i)=>(
                  <img
                    key = {i}
                    title = {title}
                    src={texture}
                    onError={(e)=>{e.target.onerror = null; e.target.src=patterns.auxiliar}}
                    style={{background: texture}}
                    className="img-selection m-1"
                    onClick={()=>{
                      if(isTexture){
                        setIsPattern(true);
                        setCurrentPattern(texture);
                      }else{
                        setIsPattern(false);
                        setSelectedColor(texture);
                      }
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="col-6">
              <p>Textures</p>
              <div className="container-5pzas  mb-3 ">
                {texture.map(({texture, title, isTexture},i)=>(
                  <img
                  key = {i}
                  title = {title}
                  src={texture}
                  onError={(e)=>{e.target.onerror = null; e.target.src=patterns.auxiliar}}
                  style={{background: texture}}
                  className="img-selection m-1"
                  onClick={()=>{
                    if(isTexture){
                      setIsPattern(true);
                      setCurrentPattern(texture);
                    }else{
                      setIsPattern(false);
                      setSelectedColor(texture);
                    }
                  }}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <p>Matte</p>
              <div className="container-5pzas">
                {matte.map(({texture, title, isTexture},i)=>(
                  <img
                  key = {i}
                  title = {title}
                  src={texture}
                  onError={(e)=>{e.target.onerror = null; e.target.src=patterns.auxiliar}}
                  style={{background: texture}}
                  className="img-selection m-1"
                  onClick={()=>{
                    if(isTexture){
                      setIsPattern(true);
                      setCurrentPattern(texture);
                    }else{
                      setIsPattern(false);
                      setSelectedColor(texture);
                    }
                  }}
                  />
                ))}
              </div>
            </div>

            <div className="col-6">
              <p>Color flip</p>
              <div className="container-5pzas  mb-3 ">
                {colorFlip.map(({texture, title, isTexture},i)=>(
                  <img
                  key = {i}
                  title = {title}
                  src={texture}
                  onError={(e)=>{e.target.onerror = null; e.target.src=patterns.auxiliar}}
                  style={{background: texture}}
                  className="img-selection m-1"
                  onClick={()=>{
                    if(isTexture){
                      setIsPattern(true);
                      setCurrentPattern(texture);
                    }else{
                      setIsPattern(false);
                      setSelectedColor(texture);
                    }
                  }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

{/*Pierna Vista*/}

        <div className="col-6">
            <div className="col-12 ">{/*colorer abs_cont shadow rounded*/}
              <Base
                // style={{ top: "2px" }}
                fill={isPattern ? selectedPattern : selectedColor}
                customDefs={isPattern ? Pattern(currentPattern) : null}
                className="img-fluid fixed_asset base"
              />
              
              <img
                className="img-fluid fixed_asset ambient_occlusion layer_size"
                src={ambientOcclusion}
                alt=""
              />

              <img
                className="img-fluid fixed_asset shadows layer_size"
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