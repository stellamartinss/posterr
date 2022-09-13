# Posterr

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.3. This project is focused on the front-end part. The back-end is mocked using 
`json-server` library. No database structure were developed, just json files with some primitive structure to help in the interations.

Some code (specially in the .service.ts codes) try to both do the request and simulate some data processing that in a perfect scenario should be done in the back-end.

## Run the project

1 - Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

2 - Run  `npm run api` to run the mocked back-end. It was developed using json-server library


## Planning

- What is the main goal for this feature?
- In what situations the user would use this feature?
- Do we already have the layout for this screen
- What is the contract the front-end have to follow with the back-end? What are the data back-end expect to receive when we post?
- When the @ is written does the project show a list of all corresponding users with that chart already writte?
- I can see only the Posts and Replies people tagged me or I can see everybody's?
- Do we have any user story for this feature?
- It is a feature that the user can add items or it just can see the one people tagged him/her?
- Where can I tag some other person?

To solve this problem, at first I will take a look to the layout screen the UX/UI team have developed, or at least to the
a mocked screen idea the product owner has. 

Then, I would ask if the back-end is already done, or if we already have a json file with the expected structure we have to post
an a Post and Reply. If we have any json file, I would suggest some structure at least as MVP so we could start developing this.

I would start by developing the layout part, with no functionality working yet. Then I would add the functions with the main logics
then I would add the API calls and after that I would back to the layout and adjust it with the data returned from API.

- I would add a `onKeyUp()` function in the `reply-to-post` input to verify if we have an `@` if so I would send a request to back-end
to get the letters typed until the late key up be equal to `space`, `enter` or `tab`
  
- I would structure the entered data in the same way the back end is expecting to receive and send it as a POST

- To list all items, I would do a GET request to get the `reply-to-post` list related to the looged user id


## Critique

To be honest I think it was very exciting do this task. If I had enough time I would work better in the scroll part after quoting or reposting stuff.
I would probably do another aproach on it so the scrolling would not be used. 




