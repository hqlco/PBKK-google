const scriptURL =
  "https://script.google.com/macros/s/AKfycbzyy-6Eiq2owsM6osTC6fVKiooRXNqe8tWcbKYjJ3HsfqqBuRDmU7E-43oTReGXRJO/exec";

const form = document.forms["regist-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response;
    })
    .then((data) => data.json())
    .then((responseData) => {
      alert("Terima kasih telah mendaftar!");
      window.location.reload();
    })
    .catch((error) => console.error("Error:", error.message));
});
