### Version 1.0  
Note: FE == FrontEnd, BE = BackEnd  
  
#### Features  
- [x] (dropdown) Form: To submit GIFs or weblinks  
FE: create a form  
BE: connect form to MongoDB (DB:user_submission)
- [x] Render randomized GIF  
FE: random number generator  
FE: add a refresh button  
BE: GET from MongoDB (DB:GIFs)  
- [x] Render randomized Weblink  
BE: GET from MongoDB (DB:links)  
- [x] Welcome Message
- [x] Developer Contact Details
- [x] Testing
FE: rename "heroku-app" to "inspire"  
FE: test with audience size 2  
FE: screen-record for demo video  
BE: fix MONGODB_URI connection  
- [x] Setup Analytics
FE: Google Analytics account created  
  
#### TODO / Feedback (! == Working On It)  
- [ ] ! Fix Google Analytics with react-ga package  
- [ ] ! Make GIF fill page (and text be in centre)  
- [ ] ! Style welcome message with HTML/CSS  
- [ ] Test Audience: Reddit  
- [ ] Style the weblink button / key  
- [ ] (optional) Render some nice, calming free music  
- [ ] Make my Contact Details clearer
- [ ] Not sure what the user should do on page (what happens if I add link?)
- [ ] User Account -- can view what you upload and what others have uploaded. RDBMS?
