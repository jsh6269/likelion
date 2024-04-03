let isEmo = false;

const storyModal = document.querySelector(".story-modal");
const storyElements = document.querySelectorAll(".story-element");

storyElements.forEach((storyElement) => {
  storyElement.addEventListener("click", () => {
    storyModal.style.display = "block";
  });
});

const storyModal_img = document.querySelector("#story-image");

const eventHandler = (e) => {
  const absoluteTop =
    window.scrollY + storyModal_img.getBoundingClientRect().top;
  const absoluteBottom =
    window.scrollY + storyModal_img.getBoundingClientRect().bottom;
  const absoluteLeft =
    window.scrollX + storyModal_img.getBoundingClientRect().left;
  const absoluteRight =
    window.scrollX + storyModal_img.getBoundingClientRect().right;

  if (
    absoluteLeft <= e.clientX &&
    e.clientX <= absoluteRight &&
    e.clientY >= absoluteTop &&
    e.clientY <= absoluteBottom
  ) {
    return;
  } else {
    storyModal.style.display = "none";
  }
};

storyModal.addEventListener("click", eventHandler);

const profile_container = document.querySelector(".profile-container");
const profile_modal = document.querySelector("#profile-modal");

profile_container.addEventListener("mouseover", () => {
  profile_modal.style.display = "block";
  profile_modal.style.position = "absolute";
});

profile_container.addEventListener("mouseout", () => {
  profile_modal.style.display = "none";
});

const likeCount = document.getElementById("like-count");
const blackHeart = document.getElementById("black-heart");
const redHeart = document.getElementById("red-heart");

blackHeart.addEventListener("click", () => {
  redHeart.style.display = "inline";
  blackHeart.style.display = "none";

  const count = parseInt(likeCount.innerText);
  likeCount.innerText = count + 1;
});

redHeart.addEventListener("click", () => {
  blackHeart.style.display = "inline";
  redHeart.style.display = "none";

  const count = parseInt(likeCount.innerText);
  likeCount.innerText = count >= 1 ? count - 1 : 0;
});

const commentsCreateForm = document.querySelector(".comments-create-form");
const commentContainer = document.querySelector(".written-comments-container");
const commentInput = document.querySelector(".comment");

const commentsList = [];
let commentId = 0;

commentsCreateForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const commentText = commentInput.value;
  if (!commentText) return;
  commentsList.push(commentText);

  commentId = commentsList.length - 1;
  const commentNode = `
    <div class="comment-wrapper">
      <span class="comment">${commentText}</span>
      <img
        id="${commentId}" 
        class="comment-delete-icon" 
        onclick="deleteComment(${commentId})" 
        src="./images/close.png" 
        alt="comment" 
      />
    </div>
  `;

  commentContainer.innerHTML = commentContainer.innerHTML + commentNode;
  commentInput.value = "";
  emos.style.display = "none";
  isEmo = false;
});

const deleteComment = (id) => {
  commentsList.splice(id, 1);
  commentContainer.innerHTML = commentsList
    .map(
      (comment, index) => `
  <div class="comment-wrapper">
    <span class="comment">${comment}</span>
    <img id="${index}" class="comment-delete-icon" onclick="deleteComment(${index})" src="./images/close.png" alt="comment" />
  </div>`
    )
    .join("");
};

const footer = document.querySelector(".footer-message");
footer.innerText = `Ⓒ ${new Date().getFullYear()} INSTAGRAM FROM META`;

const logo = document.querySelector(".logo");
logo.addEventListener("click", () => {
  location.reload(true);
});

const like_modal = document.querySelector(".like-modal");
blackHeart.addEventListener("click", () => {
  const currentRight = getComputedStyle(like_modal).getPropertyValue("right");

  like_modal.animate(
    { right: [currentRight, "1%", "1%"] },
    {
      duration: 1500,
      easing: "linear",
      iterations: 1,
      direction: "normal",
      fill: "forwards",
    }
  );

  setTimeout(() => {
    like_modal.animate(
      { right: ["1%", "-100%"] },
      {
        duration: 1000,
        easing: "linear",
        iterations: 1,
        direction: "normal",
        fill: "forwards",
      }
    );
  }, 2500);
});

const smile = document.querySelector(".smile");
const emos = document.querySelector(".selEmo");
smile.addEventListener("click", () => {
  if (isEmo) {
    emos.style.display = "none";
  } else {
    emos.style.display = "block";
  }
  isEmo = !isEmo;
});

const emoticons = document.querySelectorAll(".selEmo section span");
emoticons.forEach((emoticon) => {
  emoticon.addEventListener("click", () => {
    commentInput.value = commentInput.value + emoticon.innerHTML;
  });
});
