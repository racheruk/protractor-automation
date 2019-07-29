
# Protractor Automation POC!  
  
Protractor is a wonderful tool to automate even the day to day browser based tasks. Doesn't matter whether its the traditional software testing or ad-hoc repetitive tasks in browser.  
  
  
# Framework  
  
## Core concepts  
  
 1. Page  
 2. Layout  
  
As the name suggests **Page** conceptually is equivalent to the webpage that user is presented with in the browser. A page is made up of content that is organised in **Layout**. Although its not mandatory, *Good* webpages has its own layout based on the established UEX recommendations/study of users it is meant to cater. Most websites stay truthful to the core layout across all pages (i.e. excluding popups/modals). Its just the degree of truthfulness that varies. Some follow it rigorously and some don't.  
  
## Core Components  
  
 1. Content  
 2. Section  
 3. Browse  
  
At a basic level, a webpage is nothing but **Content**. The content is mostly a combination of text and binary data. Add styles here and there and lay it out in a presentable manner for human (and automation) consumption. In order for it to be any usable, it has to be an organised content with a consistent layout across the pages.   
  
A **Section** is nothing but relevant content grouped together. Most likely a group of web components. A Section can hold either unique or duplicate content based on a careful study/analysis of user patterns of that particular website. No Section can be on its own. While it **must** be a part of the page, it can be a sub section of a parent section. In order for that to be accommodated, a Section is defined as a combination of a parent and descendent elements. For ex. a *Header* is defined as **`<div.header>` that is a descendent of `<body>`**.   
  
Since we are talking about automation here, the combination of parent and descendent element has to be *unique*.  
  
Whether its a static or a modern kick-a$$ website, a user needs to interact with it in order to **Browse** through the pages. Actions like clicking an element, entering data, navigating across tabs/popups/windows etc.   
  
# About repository and API  
  
Repository uses Typescript in order to make the code more robust. The API is minimal in order to keep it simple to comprehend.  
  
As mentioned earlier, every website has its own way of arranging content in specific **Layout**. The repository uses [AngularJS](https://angularjs.org/) website for illustration purposes. Being faithful to the page structure of  [AngularJS](https://angularjs.org/), the default layout consists of **header**, **content**, and **footer**. So, depending on the website that you are trying to do automation, you will have to adjust the **Layout** accordingly.  
  
**Page** holds the major layout *Sections* that are specific to the website. In this case Header, Content, and Footer.  
  
While **Section** does provide API to find elements from that section or its parent or on the entire page, try to avoid the last one. Obviously, trying to find an element inside a small area is much faster and economical than trying to find something on the entire page. Each section holds the information specific to it and provides API to work with the elements/components in that section. For example `Header.goToTutorial()` .  

Its not our goal that we build a *Page* that holds API to interact with **all** elements on that page. Header and Footer are common to all pages if the website sticks to the layout in a consistent manner.  So, its the *Content* that varies according to the *Page* we are working on. For ex. *Home* page *Content* can only contain the login form section and ignore the other elements like images if they are not going to be used as part of automation. In that sense, a *Page* will only get heavier/complex if the automation interacts with it more and more. If the page is becoming bloated with API then its probably time to divide it in to two or more *Page*s.
  
**Action** and **Navigate** provides API to **Browse** through pages.   
  
Individual spec files should only use API methods. A common tendency is to use element selectors and protractor API inside the specs. This is a trap that one will regret later on. Automation is not about the specs that find elements and act on it. It is about building the *Pages* and having the *Specs* interact and test them. 

>**Avoid using selectors inside the specs at all costs**. 

Any time you see a need, there will always be a *Section* or *Page* that is good to hold that element. Use that relevant *Section* or *Page* to hold element information and provide API to interact with that element for ex. *Tutorial.getDefaultTutorialTitle()*

Two spec files are provided one uses TypeScript and another JavScript. That is just to showcase that both can coexist. Again, they both are very simple in nature.