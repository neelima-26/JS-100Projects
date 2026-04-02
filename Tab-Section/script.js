 function openTab(step) {

      let titles = ["Step 1", "Step 2", "Step 3"];
      let texts = [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sint cumque quasi, amet impedit tempore necessitatibus iste. Ratione possimus perspiciatis sapiente, ex alias, ipsam sint beatae vel repellat aperiam corrupti porro et molestiae nobis itaque recusandae vitae atque! Reiciendis voluptatum molestiae autem consectetur corporis libero itaque quo mollitia quod! Corrupti doloribus veniam iusto soluta laborum saepe debitis reiciendis atque nihil eaque ducimus quo ullam ipsum, laboriosam velit vitae sint, eius molestiae unde, tempora hic ipsam? Cupiditate, beatae. Nostrum eos, id velit nisi libero exercitationem, et fugiat assumenda mollitia debitis deleniti, illum iusto. Officiis, ratione ex? Magni, impedit vel. Quam, eaque.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sint cumque quasi, amet impedit tempore necessitatibus iste. Ratione possimus perspiciatis sapiente, ex alias, ipsam sint beatae vel repellat aperiam corrupti porro et molestiae nobis itaque recusandae vitae atque! Reiciendis voluptatum molestiae autem consectetur corporis libero itaque quo mollitia quod! Corrupti doloribus veniam iusto soluta laborum saepe debitis reiciendis atque nihil eaque ducimus quo ullam ipsum, laboriosam velit vitae sint, eius molestiae unde, tempora hic ipsam? Cupiditate, beatae. Nostrum eos, id velit nisi libero exercitationem, et fugiat assumenda mollitia debitis deleniti, illum iusto. Officiis, ratione ex? Magni, impedit vel. Quam, eaque.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum sint cumque quasi, amet impedit tempore necessitatibus iste. Ratione possimus perspiciatis sapiente, ex alias, ipsam sint beatae vel repellat aperiam corrupti porro et molestiae nobis itaque recusandae vitae atque! Reiciendis voluptatum molestiae autem consectetur corporis libero itaque quo mollitia quod! Corrupti doloribus veniam iusto soluta laborum saepe debitis reiciendis atque nihil eaque ducimus quo ullam ipsum, laboriosam velit vitae sint, eius molestiae unde, tempora hic ipsam? Cupiditate, beatae. Nostrum eos, id velit nisi libero exercitationem, et fugiat assumenda mollitia debitis deleniti, illum iusto. Officiis, ratione ex? Magni, impedit vel. Quam, eaque.."
      ];

      // Change content
      document.getElementById("title").innerText = titles[step - 1];
      document.getElementById("text").innerText = texts[step - 1];

      // Active tab change
      let tabs = document.getElementsByClassName("tab");

      for (let i = 0; i < tabs.length; i++) {
        tabs[i].classList.remove("active");
      }

      tabs[step - 1].classList.add("active");
    }