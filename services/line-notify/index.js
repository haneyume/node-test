const axios = require("axios");

const url = "https://notify-api.line.me/api/notify";
const token = "";

let jpbFinished = false;

async function requestNotify() {
  try {
    const response = await axios.post(
      url,
      {
        message: "for test",
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(response.data);

    jpbFinished = true;
  } catch (error) {
    console.error(error);
  }
}

async function main() {
  while (!jpbFinished) {
    await requestNotify();

    // This code waits for 3 seconds before continuing.
    await new Promise((resolve) => setTimeout(resolve, 3000));
  }

  console.log("Finished!");
}

main();
