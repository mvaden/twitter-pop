const dotenv = require('dotenv');
dotenv.config();

const express = require("express");
const bodyParser = require("body-parser");
const needle = require("needle");

const app = express();
const port = process.env.PORT;
const BearerToken = process.env.BEARER_TOKEN;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    //   res.send({ express: "hello from express" });
    
    const getTweets = async(id) => {
        const endpointUrl = "https://api.twitter.com/1.1/search/tweets.json";
        const params = {
            "q": "weather",
            "result_type": "recent",
            count: 5
        }
        const headers = {
            headers: {
                "User-Agent": "v2RecentSearchJS",
                "authorization": `Bearer ${BearerToken}`,
            }
        }

        const twitterResponse = await needle ("get", endpointUrl, params, headers);

        if (res.statusCode !== 200) {
            if (res.statusCode === 403) {
                res.status(403).send(twitterResponse.body);
                console.error("Return 403");
            }
            else {
                console.log("Error was not 403")
            }
        }

        if (twitterResponse.data) {
            return twitterResponse.data
        }
        else {
            console.log("Request was unsuccessful.")
        }
        
        // for (const [i, text] of Object.entries(twitterResponse.body.statuses)) {
        //     console.log(`${i} - text: ${text.text}`);
        // };

        // for (const [i, user] of Object.entries(twitterResponse.body.statuses)) {
        //     console.log(`${i} - usernames: ${user.user.screen_name}`);
        // };

        // for (const [i, avatar] of Object.entries(twitterResponse.body.statuses)) {
        //     console.log(`${i} - avatars: ${avatar.user.profile_background_image_url}`);
        // };

        // for (const [i, hashtag] of Object.entries(twitterResponse.body.statuses)) {
        //     console.log(`${i} - hashtags: ${hashtag.user.entities.hashtags}`);
        // };

        // for (const [i, url] of Object.entries(twitterResponse.body.statuses)) {
        //     console.log(`${i} - urls: ${url.user.entities.description.urls[1].url}`);
        // };

        res.send({"sending this body": twitterResponse.body.statuses})
        console.log()
    }
    console.log("Get Tweets: ", getTweets());
});

app.listen(port, () => console.log(`Express is listening on port ${port}`));
