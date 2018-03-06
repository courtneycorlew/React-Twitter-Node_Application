//Pull in our libraries
var express = require('express');
var router = express.Router();
var Twitter = require('twitter');
var _ = require('lodash');
const sortBy = require('sort-array')



//Get our access keys
var keys = require('./keys.js');

//Create twitter client
var twitter = new Twitter(keys.twitterKeys);

//Store our tweets
var tweets = [];


/* GET home page. */
// router.get('/', function (req, res) {
//     res.render('index', {title: 'Node Twitter', tweets: tweets});
// });

router.post('/', function (req, res) {
    //Get the user name and number of tweets from the form
    // var user = req.body.hashtag;
    // console.log('user', user)
    var numTweets = 100;

    //Clear out old tweets
    tweets = [];


    //Hit Twitter for the information
    twitter.get('search/tweets', {count: numTweets, q: '#oscars', lang: 'en', exclude: 'retweets'})
        .then(function (tw) {
            // console.log('tw', tw.statuses[0].text)
            let length = tw.statuses.length
            console.log('length', length)
            //Loop through the results
            for (var i = 0; i < length; i++) {
                tweets.push({tweet: tw.statuses[i].text});
                // console.log('text',tw.statuses[i].text)
            }
            // let lists = _.chunk(tweets, 10)
            // console.log(lists.length)
        
            let ascList =  sortBy(tweets, 'tweet')
            
          console.log('ascending list: ', ascList)
        
            let descList = ascList.reverse()
           console.log('desc: ', descList)
            //Render the index page with the tweets
            // res.render('index', {title: 'Node Twitter', tweets: tweets });
            // console.log('tweets',tweets)

           res.send(tweets)

        })
        .catch(function (error) {
            console.log(error);
            throw error;
        });
});


module.exports = router;
