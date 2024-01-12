const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const askOut = document.querySelector(".askOut");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML ="<h1>She said Yessssss!!!</h1>";
  askOut.innerHTML=""
  gif.src =
    "https://media.giphy.com/media/UMon0fuimoAN9ueUNP/giphy.gif";

    const emailBody = "Date & Time : \n Venue : \n";
  const emailAddress = "khatrirhythm@gmail.com";
  const subject = "Date with Rhythm APROVEDDDDDDDD!!!";

  const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;
  
  // Open default email client
  window.location.href = mailtoLink;
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});