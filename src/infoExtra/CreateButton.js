export let buttonCamera = [];
export const dateRover = [];

export const createButton = (infoMars) => {
  buttonCamera = [];

  infoMars.forEach((info) => {
    if (!dateRover.includes(`Landing date: ${info.rover.landing_date}`)) {
      dateRover.push(`Landing date: ${info.rover.landing_date}`);
    }
    if (
      !dateRover.includes(`
      Launch date: ${info.rover.launch_date}`)
    ) {
      dateRover.push(`
      Launch date: ${info.rover.launch_date}`);
    }

    if (!buttonCamera.includes(info.camera.name)) {
      buttonCamera.push(info.camera.name);
    }
  });
};
