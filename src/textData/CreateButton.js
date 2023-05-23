export let buttonCamera = [];
export const dateRover = [];

export const createButton = (infoMars) => {

  buttonCamera = [];

    infoMars.forEach((info) => {
      if (
        !dateRover.includes(`Fecha de aterrizaje: ${info.rover.landing_date}`)
      ) {
        dateRover.push(`Fecha de aterrizaje: ${info.rover.landing_date}`);
      }
      if (
        !dateRover.includes(`Fecha de lanzamiento: ${info.rover.launch_date}`)
      ) {
        dateRover.push(`Fecha de lanzamiento: ${info.rover.launch_date}`);
      }

      if (!buttonCamera.includes(info.camera.name)) {
        buttonCamera.push(info.camera.name);
      }
    });
  };