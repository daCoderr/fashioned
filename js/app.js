(function () {
  //part one making the selections
  let headlines = document.getElementById("headlines");
  let links = headlines.children;
  console.log(links);
  let left = headlines.offsetLeft;
  console.log(left);
  let anim;

  //part two making a function to measure the left and making it moving
  let moveHeadlines = () => {
    left--;
    console.log(left);
    if (left < -links[0].offsetWidth) {
      left += links[0].offsetWidth;
      links[0].parentNode.appendChild(links[0]);
    }
    headlines.style.left = left + "px";
    anim = requestAnimationFrame(moveHeadlines);
  };
  moveHeadlines();
  //looping
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("mouseover", (e) => {
      cancelAnimationFrame(anim);
      let change = e.target;
      change.style.color = "#242424";
      change.style.textDecoration = "underline";
    });
    links[i].addEventListener("mouseout", (e) => {
      moveHeadlines();
      let nozChange = e.target;
      nozChange.style.color = "#242424";
      nozChange.style.textDecoration = "none";
    });
  }
})();
