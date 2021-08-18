class Fetch {
  async getCurrent(input) {
    const myKey = "6f19537527b01002291633e3752220f9";

    //make request to url

    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${myKey}`
    );

    const data = await response.json();

    console.log(data);

    return data;
  }
}
