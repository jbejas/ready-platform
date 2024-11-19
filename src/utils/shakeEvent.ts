import { Accelerometer } from "expo-sensors";

const THRESHOLD = 1000; // Adjusted for better precision
const INTERVAL = 100; // Adjusted interval for more accurate checks
const SMOOTHING = 0.8; // Smoothing factor for accelerometer data

export const addShakeEventListener = (handler) => {
  let last_x = 0,
    last_y = 0,
    last_z = 0;
  let lastUpdate = 0;

  Accelerometer.addListener((accelerometerData) => {
    let { x, y, z } = accelerometerData;
    let currTime = Date.now();

    if (currTime - lastUpdate > INTERVAL) {
      let diffTime = currTime - lastUpdate;
      lastUpdate = currTime;

      // Apply smoothing to the accelerometer data
      x = last_x * SMOOTHING + x * (1 - SMOOTHING);
      y = last_y * SMOOTHING + y * (1 - SMOOTHING);
      z = last_z * SMOOTHING + z * (1 - SMOOTHING);

      let deltaX = x - last_x;
      let deltaY = y - last_y;
      let deltaZ = z - last_z;

      let speed =
        (Math.sqrt(deltaX * deltaX + deltaY * deltaY + deltaZ * deltaZ) /
          diffTime) *
        10000;

      if (speed > THRESHOLD) {
        handler();
      }

      last_x = x;
      last_y = y;
      last_z = z;
    }
  });
};

export const removeShakeEventListener = () => {
  Accelerometer.removeAllListeners();
};
