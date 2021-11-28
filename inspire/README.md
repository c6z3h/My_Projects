Note: FE == FrontEnd, BE = BackEnd  

#### Version 1.2 [IN PROGRESS]
- [x] Don't re-render the page when user typing (Redux state management)  
- [x] Include image credits
- [x] Code refactors (Custom Hooks / open-in-new-tab / remove console.logs)  
- [ ] Test Audience: Reddit  

#### Version 1.1  
- [x] Analytics  
Fixed up Google Analytics with react-ga package  
- [x] User Interface (CSS/HTML)  
FE: Make GIF fill page (and text be in centre)  
FE: Style welcome message with HTML/CSS  
FE: Style the weblink button / key  
FE: Make my Contact Details clearer  
- [x] User Experience  
FE: Added message for users to know what to do on the page  
FE: Improved Mobile Experience  
  
#### Version 1.0  
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
  
#### TODO / Feedback
- [ ] (optional) Render some nice, calming free music  
- [ ] User Account -- can view what you upload and what others have uploaded. RDBMS?  
- [ ] Inconsistency over Chrome, Microsoft Edge.
