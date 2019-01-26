# group-project
repo for movie suggester group project

<!--
********* MVP ********* 
Target audience: Movie watchers of all ages.

Goal:  Reccomend movies based on genres that users users can save for later.

User stories:
As a movie-watcher, I want to find and store movies in a list to watch later. 

MVP: 
- Ability to search through genres and receive reccomendations. 

+ Ability to save to a list for later (Login with Firebase). 
+ Play a trailer for the movie reccomendations. 



********* Copy and pasted from index.html ********* 

    <!--
        on page load have a popup where you need to register a key/code to save your list
        
        https://introjs.com/ - have a step-by-step guide on how to use the website.

        index.html - have buttons for genres at the top

       app.js - when you click on a particular gengre->
            a row is created below with 3 movie posters/images diaplaying

        app.js - when clicking on another genre->
            another row is dynamically created and inserted at the top, with 3 new movie suggestions 

        you can click on one of the suggestions ->
            -upon clicking on the movie you want, a quick-view popup appears with more info etc.
            -Information is diplayed under the movie poster image, and the image becomes a link to a youtube trailer / embeds a trailer from youtube.

        there's a button to add a particular movie to "your list"


        firebase!
        don't do user authentication, instead local storage and user key/unique id


    
        .
        on page load have a popup where you need to register a key/code to save your list
        
        https://introjs.com/ - have a step-by-step guide on how to use the website.

        have buttons for genres at the top

        when you click on a particular gengre->
            a row is created below with 3 movie posters/images diaplaying

        when clicking on another genre->
            another row is dynamically created and inserted at the top, with 3 new movie suggestions 

        you can click on one of the suggestions ->
            -upon clicking on the movie you want, a quick-view popup appears with more info etc.
            -Information is diplayed under the movie poster image, and the image becomes a link to a youtube trailer / embeds a trailer from youtube.

        there's a button to add a particular movie to "your list"


        firebase!
        don't do user authentication, instead local storage and user key/unique id


    

********* Git *********

This is a step-by-step guide for when you want to start working on something. (assuming you just turned on your computer)

1)  git checkout master
<makes sure you're in the master branch>

2)  git pull origin master
<makes sure you have the latest version of code>

3)  git checkout "branch"
<puts you in your branch now>

4)  git merge master
<copies the latest version of master code to your branch>

DO YOUR EDITS, SAVE WORK

5)  git add *
<adds your file to the 'commit stage'>

6)  git commit -m "message"
<commits your edits to your branch>

7)  git push
<officializes your changes to your branch!>

8)  git checkout master
<puts you back in the master branch>

9)  git pull
<pulls the latest version of master code, maybe someone made some edits>

10) git merge "branch"
<this will merge the edits you made in your branch, with the master branch>

11) git commit -m "message here"
<commits the merge of the two version -- make sure you resolve merge conflicts>

12) git push
<final step, push those merges!>

YOU MADE IT! maybe...

>
