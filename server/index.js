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

const getTweets = async(req, res) => {
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
    const response = await needle ("get", endpointUrl, params, headers);

    if (res.statusCode !== 200) {
        if (res.statusCode === 403) {
            res.status(403).send(response.body);
            console.error("Return 403.");
        }
        else {
            console.log("Error was not 403.");
        }
    }

    if (response.body) {
        console.log("chained statuses", response.body.statuses);
        const result = Object.values(response.body.statuses).map(item => ({
            "text": item.text,
            "screen_name": item.user.screen_name,
            "avatar": item.user.profile_background_image_url,
            "hashtags": item.user.entities.hashtags,
            // "url": item.entities.urls
        }));
    
        console.log("Final Result: ", result);
        res.status(200).send({"sending this body": result})  
    }
    else {
        console.log("Request was unsuccessful.")
    }
}


app.get("/", getTweets);

app.listen(port, () => console.log(`Express is listening on port ${port}`));
