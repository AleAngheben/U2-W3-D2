// const saveBtn = document.getElementById("save-btn");

// saveBtn.onclick = saveName;

// const saveName = () => {
//   const name = document.getElementById("name");
//   const nameValue = name.value;
//   const savedName = document.getElementById("saved-name");
//   if (nameValue !== "") {
//     localStorage.setItem("userName", nameValue);
//     savedName.textContent = nameValue;
//   }
// };

window.addEventListener("DOMContentLoaded", () => {
  const saveBtn = document.getElementById("save-btn");
  const removeBtn = document.getElementById("remove-btn");

  saveBtn.onclick = savingUser;
  removeBtn.onclick = removeUser;
});

//variabili
const nameInput = document.getElementById("name");
const savedName = document.getElementById("saved-name");

//creo funzione per inserire nel local il mio valore
const savingUser = () => {
  const newValue = nameInput.value;
  localStorage.setItem("user-name", newValue);
  savedName.innerText = "Ultimo username creato è : " + newValue;
};

//creo funzione per rimuovere il mio valore dal local
const removeUser = () => {
  localStorage.removeItem("user-name");
  savedName.innerText = "";
};
