import { useState } from "react";

function Drum() {
  const [keyName, setKey] = useState("");
  const [kit, setKit] = useState("Heater Kit");
  const [powerOn, setPowerOn] = useState(true);

  const play = id => {
    if (powerOn) {
      let keyNote = document.getElementById(id);
      keyNote.play();
      setKey(keyNote.getAttribute("name"));
    };
  };

  const changeKit = async e => {
    setKit(e.target.checked ? "Smooth Piano Kit" : "Heater Kit");
    setKey("");
  };
console.log(kit)
  return (
    <div id="drum-machine">
      {kit === "Heater Kit" ? (
        <div id="drum-pads">
          <button class="drum-pad" id="pad-1" onClick={() => play("Q")}>Q
          <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" class="clip" id="Q" name="Heater 1" />
          </button>
          <button class="drum-pad" id="pad-2" onClick={() => play("W")}>W
          <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" class="clip" id="W" name="Heater 2" />
          </button>
          <button class="drum-pad" id="pad-3" onClick={() => play("E")}>E
          <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" class="clip" id="E" name="Heater 3" />
          </button>
          <button class="drum-pad" id="pad-4" onClick={() => play("A")}>A
          <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" class="clip" id="A" name="Heater 4" />
          </button>
          <button class="drum-pad" id="pad-5" onClick={() => play("S")}>S
          <audio src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" class="clip" id="S" name="Clap" />
          </button>
          <button class="drum-pad" id="pad-6" onClick={() => play("D")}>D
          <audio src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" class="clip" id="D" name="Open HH" />
          </button>
          <button class="drum-pad" id="pad-7" onClick={() => play("Z")}>Z
          <audio src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" class="clip" id="Z" name="Kick n' Hat" />
          </button>
          <button class="drum-pad" id="pad-8" onClick={() => play("X")}>X
          <audio src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" class="clip" id="X" name="Kick" />
          </button>
          <button class="drum-pad" id="pad-9" onClick={() => play("C")}>C
          <audio src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" class="clip" id="C" name="Closed HH" />
          </button>
        </div>) : (
          <div id="drum-pads">
            <button class="drum-pad" id="chord-1" onClick={() => play("Q")}>Q
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3" class="clip" id="Q" name="Chord 1" />
            </button>
            <button class="drum-pad" id="chord-2" onClick={() => play("W")}>W
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3" class="clip" id="W" name="Chord 2" />
            </button>
            <button class="drum-pad" id="chord-3" onClick={() => play("E")}>E
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3" class="clip" id="E" name="Chord 3" />
            </button>
            <button class="drum-pad" id="chord-4" onClick={() => play("A")}>A
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3" class="clip" id="A" name="Shaker" />
            </button>
            <button class="drum-pad" id="chord-5" onClick={() => play("S")}>S
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3" class="clip" id="S" name="Open HH" />
            </button>
            <button class="drum-pad" id="chord-6" onClick={() => play("D")}>D
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3" class="clip" id="D" name="Closed HH" />
            </button>
            <button class="drum-pad" id="chord-7" onClick={() => play("Z")}>Z
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3" class="clip" id="Z" name="Punchy Kick" />
            </button>
            <button class="drum-pad" id="chord-8" onClick={() => play("X")}>X
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3" class="clip" id="X" name="Side Stick" />
            </button>
            <button class="drum-pad" id="chord-9" onClick={() => play("C")}>C
              <audio src="https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3" class="clip" id="C" name="Snare" />
            </button>
          </div>
        )}
      <div id="controls">
        <div class="toggle-wrapper">
          <label>Power</label>
          <label class="switch">
            <input type="checkbox" checked={powerOn} onChange={e => setPowerOn(e.target.checked)} />
            <span class="slider round"></span>
          </label>
        </div>
        <div id="display">{powerOn ? keyName || kit : ""}&nbsp;</div>
        <div class="toggle-wrapper">
          <label>Bank</label>
          <label class="switch">
            <input type="checkbox" checked={kit === "Smooth Piano Kit"} onChange={changeKit} />
            <span class="slider round"></span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Drum;