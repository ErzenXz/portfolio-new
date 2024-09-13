async function parseRSS(url) {
   const response = await fetch(url);
   const str = await response.text();
   const data = new window.DOMParser().parseFromString(str, "text/xml");
   console.log(data);
   const items = data.querySelectorAll("item");
   let json = [];
   items.forEach((el) => {
      json.push({
         title: el.querySelector("title").textContent,
         link: el.querySelector("link").textContent,
      });
   });
   return json;
}

parseRSS("https://blog.erzen.tk/feed")
   .then((response) => {
      console.log(response);
      let html = [];
      response.forEach((el) => {
         html.push(`
            <div class="news-article" onclick="openLink('${el.link}')">
                  <h3>${el.title}</h3>
                  <a href="${el.link}" target="_blank"
                     >Read More</a
                  >
               </div>
            `);
      });

      // Use max 8 articles
      html = html.slice(0, 7);

      html.push(`
                       <div
                  class="news-article"
                  onclick="openLink('https://blog.erzen.tk')"
               >
                  <h3>+</h3>
                  <a href="https://blog.erzen.tk/" target="_blank"
                     >Read More</a
                  >
               </div>
               `);

      document.getElementById("news").innerHTML = html.join("");
   })
   .catch((error) => {
      // Handle any errors
      console.log(error);
   });
