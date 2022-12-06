const Init = () => {
    let cyoufuku = [];
    for(let i = 0; i < tweets.length; i++) {
        if(cyoufuku.includes(tweets[i].name)) continue;
        $(".menu").append(`<button type=\"button\" class=\"btn btn-info\" style=\"float: left\" onclick="showTweet(\'${tweets[i].name}\')">${tweets[i].name}</button>`);
        cyoufuku.push(tweets[i].name);
    }
    showTweet();
}

const showTweet = (name="all") => {
    $(".main>").remove();
    for(let i = 0; i < tweets.length; i++){
        if(tweets[i].name !== name && name !== "all") continue;
        $(".main").append(`
        <div class='tweet'>
          <img src=\"${tweets[i].avatar}\" class=\"tweet_icon\" />
          <p class="t_name"><b>${tweets[i].name}</b>  <small>${tweets[i].tweetedAt}</small></>
          <p class="t_msg">${tweets[i].message}</p>
        </div>`)
    }
}