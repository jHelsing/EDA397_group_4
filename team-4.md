% Agile Development Processes Project Report  
  Team 4
% Evio Abazi; Lage Bergman; Jonathan Helsing; Ashish M Husain; Christoffer Karlsson; Oskar Lignell; Marufa Binte Mostafa
%

This is the project report template.
Fill it out over the course of the project.

# Project Description
The project is called Heartbeat, which is a mobile application for tracking patients in a hospital. Through the application, doctors can view patients, which doctors are treating a patient, the patient’s allergies, and the patient’s medical history.
The initial description given by the customer is as follows:
“Hospital Horror: I work in a hospital, and we are struggling to keep track of our patients. It is such a difficult process which requires knowing; any treatments they have had, which doctor is treating them, their allergies, the doctor’s diagnosis. We desperately need an app which can tell us all of these details about a patient.”
The application is developed using Ionic, a cross-platform mobile framework built on top of AngularJS and Apache Cordova. The backend database is developed using Firebase. Ionic uses TypeScript for scripting and HTML with CSS for representing visual components.

- GitHub repository: https://github.com/jHelsing/Heartbeat
- Issue tracker: https://trello.com/b/nf2rvUqW/development
- Continuous integration builds: https://travis-ci.org/jHelsing/Heartbeat/

# Sprint 2 Log

## Commitment
For the second sprint, six backlog items were selected.
- #2 As an administrator I want to be able to register doctors to the system.
- #15 As a user I want to be able to log in.
- #11 As an administrator I want to be able to add a new patient to the hospital.
- #8 As an administrator I want to be able to assign doctor(s) to a patient.
- #18 As a doctor I want to be able to view my patients.
- #19 As a user I want to be able to create, read, update, and delete data in the application.

## Work Done
During the second sprint, pair programming was used to a large extent. The use of pair programming was facilitated by assigning most of the selected backlog items to two team members instead of just one, allowing these two team members to work closely together. By using this technique, it was possible to share knowledge and review each other in order to get a good result.

The group met after every lecture to do a stand-up meeting to inform everyone about what had been done since the last meeting, discuss found obstacles, and plan for the time ahead.

The project is using the Cloud Firestore from Google Firebase for storage in the cloud. It is a NoSQL database using collections, which can be seen as quite similar to the concept of tables in SQL databases. This suited our previous experience better than if we had chosen the alternative database offered by Google Firebase. The Cloud Firestore database also allows us to structure data in a way that we believe is more intuitive, and allows us to perform richer querying on the data. We believe that creating the data model is a very important step of building software. Therefore, we met as a team to discuss how we wanted to construct our data model, i.e. which collections we should store and which fields those should contain.

A meeting on Friday the 13th was selected to review pull requests created and make sure that everyone’s code was similar in structure and it’s execution.

To further promote the feeling of collective code ownership, increase each others knowledge, and to achieve better code, we decided to increase the number of required reviewers on pull request from one person to two. This will act as a safety net, making sure that the code we are merging into our project meets a certain standard and works as expected. It also forces more people to actually see and reflect upon the code, which in the long run can be quite useful for general understandability of the code and maintainability. A checklist with certain things to consider when doing a code review (or even writing a pull request) was also created, as a guiding tool to make code reviews more systematic.

Feature | Time estimated | Time spent per team member
------------|----------|---------------------------
*Sprint 2 planning meeting* | *3 hours* | *Evio Abazi: 3 hours, Ashish M Husain: 3 hours, Lage Bergman: 3 hours, Jonathan Helsing: 3 hours, Christoffer Karlsson: 3 hours, Oskar Lignell: 3 hours, Marufa Binte Mostafa: 3 hours, David Mendez Alvarez: 3 hours*
*Database data model creation* | *2 hours* | *Evio Abazi: 2 hours, Ashish M Husain: 2 hours, Lage Bergman: 2 hours, Jonathan Helsing: 1 hours, Christoffer Karlsson: 3.5 hours, Oskar Lignell: 2 hours, Marufa Binte Mostafa: 2 hours, David Mendez Alvarez: 2 hours*
*2.1 Create a register doctor view* |*2 hours*| *Evio Abazi: 3 hours, Oskar Lignell: 3 hours*
*2.2 Connect to create a new doctor in database* |*4 hours*| *Evio Abazi: 4 hours, Oskar Lignell: 4 hours*
*8.1 Make it possible to register a patient to doctor when creating a patient* | *5 hours* | *Marufa Binte Mostafa: 4 hours, David Mendez: 4 hours*
*11.1 Create a patient creation view.* | *2 hours* | *Marufa Binte Mostafa: 2 hours*
*11.2 Connect to create a new patient in Database* | *6 hours* | *Marufa Binte Mostafa: 6 hours*
*15.1 Create a log-in view* | *1 hour* | *Ashish M Husain: 1 hours, Lage Bergman: 1 hours*
*15.2 Check with database over credentials* | *2 hour* | *Ashish M Husain: 2 hours, Lage Bergman: 2 hours*
*15.3 Check level of user.* | *3 hour* | *Ashish M Husain: 3 hours, Lage Bergman: 3 hours*
*18.1 View all of my patients* | *10 hours* | *Jonathan Helsing: 12 hours*
*18.2 View a specific patient* | *4 hours* | *Jonathan Helsing: 3 hours*
*19.1 Research and create a Firebase database and connect it to the application* | *6 hours* | *Christoffer Karlsson: 6 hours*
*19.2 Add example CRUD view for the Users collection to demonstrate how to interact with Firebase* | *2 hours* | *Christoffer Karlsson: 2 hours*
*19.3 Refactor example Users collection database functionality into a provider for better separation of concerns and modularity, as a reference for other collections* | *1 hours* | *Christoffer Karlsson: 1 hours*
*19.4 Replace Users collection functionality with Nurses collection and make it possible to access referenced values from Firestore* | *3 hours* | *Christoffer Karlsson: 4 hours*
*Report Sprint 2* | *5 hours* | *Ashish M Husain: 1 hour, Christoffer Karlsson: 1 hour, Oskar Lignell: 1 hour, Lage Bergman: 1 hour, Jonathan Helsing: 1 hours, David Mendez Alvarez: 1 hours*, Marufa Binte Mostafa: 0.5 hours

## Reflections
In many cases it was very convenient to use pair programming as all team members are new to the technologies used in the project, and so having one person who can look for information and try to anticipate upcoming problems while the other person writes the actual source code is very helpful. At times it can be frustrating to try to explain certain concepts when you know in your head what a possible solution looks like but you aren’t able to write it yourself, but remaining patient and discussing everything makes for a more thorough job since all aspects are discussed aloud. It also gives more collective ownership of the code when two people are involved in creating each solution. Having two sets of eyes on the code also makes spotting errors much faster.

The group tried to have a team member acting as a proxy, or an on-site customer, in the beginning of the second sprint. This did not last for long. It might have been that it was forgotten after the easter, but while the practice was used one could see that it is possible that the on-site customer’s opinions differ from the “real” customer.

So far, all the tools selected for the project have worked well. Using TSLint makes it easier to read everyone's code and also reduces the risk of unnecessary merge conflicts due to inconsequent spacing and such. The git workflow also makes collective ownership more natural, as someone else always has to approve the merging of each feature branch to the develop branch, forcing them to read and understand the code to some extent. We believe that increasing the number of required reviewers will help us get even better at this, while still maintaining some agility of being able to merge changes rather quickly.

Writing tests has been seen as something quite unnatural due to the early stages of the project, where the code is quickly being changed by us, and as a result of changed requirements from customers. Our goal is to soon be able to start writing tests in a more systematic manner, when the basics of the project has been established and implementation has calmed down a bit. This will probably let us write tests that do not instantly have to be changed, which could otherwise be considered wasteful.

Gathering together as a team to create the initial data model for the Cloud Firestore database was a good exercise, where everyone was involved in the discussion. Spending some extra time on thinking through the data model is something we believe can greatly help us in the long run, as making major changes to the data model can be quite tricky after the database has already been populated by a lot of data, and the code has been built around a certain structure.

Due to an optimistic time schedule, we feel that the pull requests were not reviewed to the extent they ideally should have been. To avoid introducing a lot of technical debt, we might take this into account during the next sprint planning, to perform refactoring to resolve any issues introduced when merging these particular pull requests. We will also try to create the pull requests earlier during the next sprint, to enable us to spend more time on code reviews before merging.


# Sprint 1 Log

## Commitment
For the first sprint, only one backlog item was completed:
* As developers we want a "Hello World" application pushed to GitHub.

## Work Done
During the startup meeting, decisions were made on which technologies to use, both in the actual product and for the development work (communication, issue tracking, etc.) and general planning and design ideas. 
We opted to choose the Ionic Framework to develop the application as it is cross-platform and free to use. The decision was unanimous as everyone wanted to learn a new framework for this project, and our brief research depicted Ionic as a great tool for rapid prototyping, which seemed suitable in the context of this project. For communication between team members, Slack was selected and finally, for issue tracking and depicting tasks for the project in a systematic manner, using Trello was finalized. 

Some team members are new to git, and so a quick tutorial session was held to bring everyone up to speed. All the team members were new to the Ionic framework. Thus all of us together in the meeting learned the configuration and installation of the framework.
Lastly, a git workflow was decided upon, and the repository was configured to prevent commits directly to the master or develop branches, using protected branches. The backlog was populated with some expected features, and an initial project was pushed to GitHub.

For the planning phase, we opted to list down the primary tasks for the current sprint in our Trello dashboard and mark them as completed when they were finalized, verified and tested. As for the design, in the meeting, we opted to consider the possible requirements of the hospital system briefly based on the problem statement that was provided to us. Hence, this gave us a contextual idea of how the feature set may look like from the perspective of the customer. Based on our findings, a rough sketch of the possible entities and their relations were transcribed.
When it comes to the continuous integration tool, we opted for Travis CI which was set up and configured to work with the Ionic project, unit testing, and proper notifications for builds from GitHub. Additionally, during the startup meeting, we made sure that everyone had the programs required, and that they work, to work with the Ionic project, i.e. that everyone's development environment was set up.

A test suite was also created, using the Karma test runner in combination with the behaviour-driven testing framework Jasmine. A simple test was also created for demonstration purposes, with the primary intention of ensuring that the connection between Travis CI and GitHub was correctly configured. The test suite can be used primarily for unit testing, but an end-to-end testing framework such as Protractor might later be added as well.
To ensure a consistent code style and to enable us to follow best practices, a TSLint configuration was created for static code analysis. The configuration contains most of the recommended TSLint rules for TypeScript. TSLint can be integrated with various editors, such as Visual Studio Code, for instant feedback.

<!--- *Name and ID of each feature* | *X hours* | *Member A: Y hours, Member B: Z hours* --->
Feature | Time estimated | Time spent per team member
------------|----------|---------------------------
*1 As developers we want a “Hello World” app pushed to GitHub* | * * | * *
*1.1 Initial project meeting, Sprint 1 planning* | *4 hours* |	*Evio Abazi: 4 hours, Ashish M Husain: 4 hours, Lage Bergman: 4 hours, Jonathan Helsing: 4 hours, Christoffer Karlsson: 4 hours, Oskar Lignell: 4 hours, Marufa Binte Mostafa: 4 hours*
*1.2 Add .gitignore* |	*0.5 hours*	|	*Jonathan Helsing: 0.5 hours*
*1.3 Setup Travis* | *4 hours* |	*Jonathan Helsing: 4 hours, Christoffer Karlsson: 1 hour*
*1.4 Add TA’s to git repo (+ slack, trello, etc.)*|	*3 hours* |	*Evio Abazi: 0.5 hours, Jonathan Helsing: 0.5 hours, Lage Bergman: 0.5 hours*
*1.5 Initiate an Ionic Project* |	*14 hours*	| *Evio Abazi: 2 hours, Ashish M Husain: 3 hours, Lage Bergman: 2 hours, Jonathan Helsing: 2 hours, Christoffer Karlsson: 2 hours, Oskar Lignell: 4 hours, Marufa Binte Mostafa: 3 hours*
*1.6 Add TSLint configuration* | *2 hours* | *Christoffer Karlsson: 2 hours*
*1.7 Create one simple unit test to make sure Travis is able to handle it*	 | *3 hours* |	*Christoffer Karlsson: 3 hours*
*1.8 Report Sprint 1*				|	*4 hours*	|	*Ashish M Husain: 1 hour, Christoffer Karlsson: 0.5 hours, Oskar Lignell: 1 hour, Lage Bergman: 1 hours, Jonathan Helsing: 0.5 hours*
*1.9 Self Study of Ionic Framework/Github* | *25 hours* |	*Evio Abazi: 4  hours, Ashish M Husain: 4 hours, Lage Bergman: 3 hours, Jonathan Helsing: 4 hours, Christoffer Karlsson: 3 hours, Oskar Lignell: 4 hours, Marufa Binte Mostafa: 3 hours*

## Reflections

Overall the meeting went very well, and everyone contributed to the discussions. The initial project setup required some research since none of the team members was very familiar with Ionic or Travis CI while a few had little to no prior experience of using GitHub.

Since the first Sprint was not even a week long and only included setup of the project environment, no real agile practices were used. Tools were chosen to enable continuous integration and test-first development, as well as for enforcing code standards, but none of the techniques was practiced. Setting up these tools required some work since the team is not familiar with all of them, but hopefully, they will be rewarding when the actual development starts.
Many of the tools used were discussed and went through together to make sure that everyone had the same basic knowledge of the tools and how to use them.


<!-- Reflect on how the work worked.
This data will form the basis for your final reflection.
As the postmortem will be a writeup, it's fine to use shorthand notes, bullet list, and similar.
Keep within 1000-1500 words. -->

<!-- Discuss any deviations from the sprint commitment. -->

<!-- Reflect on the agile practice practiced: -->

<!-- - Did your experience correspond to or contradict with what literature claims?

    - Analysis of why. Mostly interesting if something unexpected happens, but even
      if everything runs according to plan, reflecting on the underlying mechanisms
      can be interesting. -->

<!-- - How did the practices interact?
  Did they complement or counteract each other? -->

<!-- - How efficient were the practices, given the time they took to use? -->

# Postmortem
Once the project is finished, summarize your experiences.
The postmortem part shall be 2000-3000 words long.

Considering the following:

- With regards to the agile practices, reflect on the combined experience from all sprints.

- Which practices had the most impact on the software developed?
  Think of both positives and negatives.

- What would you do differently in a future but similar project?


# Project outcome
Document the project, for example using screenshots.



