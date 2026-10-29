function checkNumber() {
          const input = document.getElementById("number");
          const number = input.value.trim();

          if (number === "347777") {
            window.location.href = "../bank/Den.html";
          } else if (number === "1") {
            window.location.href = "../bank/Art.html";
          } else if (number === "0") {
            window.location.href = "../bank/Dan.html";
          } else {
            alert("Неверное число!");
          }