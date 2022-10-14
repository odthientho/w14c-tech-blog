# Tech-Blog

## Description

Writing about tech can be just as important as making it. Developers spend plenty of time creating new applications and debugging existing codebases, but most developers also spend at least some of their time reading and writing about technical concepts, recent advancements, and new technologies. A simple Google search for any concept covered in this course returns thousands of think pieces and tutorials from developers of all skill levels!

This application is a CMS-style blog site similar to a Wrodpress site, where users can publish their blog posts and comment on other developer's posts as well. 

## Table of Contents
  - [Features](#features)
  - [Usage](#usage)
  - [Walkthrough-Video](#walkthrough-video)
  - [Questions](#questions)

## Features

```
User will be able to publish articles, blog posts, and my thoughts and opinions on this CMS-style blog site, with few features below:

* The homepage will include existing blog posts if any have been posted with navigation links for the homepage and the dashboard; and the option to log in and/or sign-up.
* Users can create new account with their own username and password to start blogging their posts.
* An existing blog post is presented with the post title, contents, post creator’s username, and date created for that post and have the option to leave a comment.
* When user, who is logged in, will see their posts that they have already created in the dashboard and the option to add a new blog post.
```
## Usage

Before using, you need to:
* Change mysql username and password in file .env.EXAMPLE and rename it to .env
* Create Database by moving to the db folder and running below command:

```
mysql -u ** YOUR_USERNAME ** -p 
** YOUR_PASSWORD **

source schema.sql
```
* Install all related packages
```
npm i
```
* Seeding database
```
npm run seed
```
* Start server
```
npm start
```

## Deployments
You can use my tech blog in this deployed site:
[https://w14c-tech-blog.herokuapp.com/](https://w14c-tech-blog.herokuapp.com/).

Github Repo: [https://github.com/odthientho/w14c-tech-blog](https://github.com/odthientho/w14c-tech-blog)


## Questions
If you have any questions about the repo, open an issue or contact me directly at odthientho@gmail.com. You can find more of my works at [odthientho](https://github.com/odthientho/).