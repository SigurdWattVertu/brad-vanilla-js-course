const jokeBtn = document.getElementById("joke-btn");
const jokeText = document.getElementById("joke");
const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    console.log(this.response);
    const res = JSON.parse(this.response);
    console.log(res);
    if (res) {
      console.log("hdsfad");
      jokeText.innerHTML = res.value;
    }
  }
};

jokeBtn.addEventListener("click", getNewJoke);

function getNewJoke() {
  xhr.open("GET", "https://api.chucknorris.io/jokes/random");

  xhr.send();
}
