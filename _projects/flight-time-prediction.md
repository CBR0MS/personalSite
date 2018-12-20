---
layout: project-page
title: Flight Time Prediction with Tensorflow 
time: Dec. 2018
tags: [Web, Interactive, Machine Learning, UI]
image: /static/img/flygenius.jpg

---
![Main Image](/static/img/flygenius.jpg){: .hero-image .img-fluid }
# Flight Time Prediction with Tensorflow and Keras
## Dec. 2018

### Process
This was a four-day project I completed for the class Human AI Interaction in fall of 2018. The first two days were spent [developing the model](https://github.com/CBR0MS/flightTimeModel/blob/master/Flight%20Time%20Modeling.ipynb) and the other two days were spent designing and [implementing the website, flygeni.us](https://flygeni.us).

I started with data from the US Department of Transportation and visualized it in a variety of ways to identify key features to include in the classifier. I settled on using 
 - Airline
 - Origin airport
 - Destination airport
 - Month
 - Day of month
 - Day of week

as the features. Each would be collected from the user and fed into the model to produce an estimate for the departure and arrival times. A more in-depth description can be found in [the notebook I wrote](https://github.com/CBR0MS/flightTimeModel/blob/master/Flight%20Time%20Modeling.ipynb). 

The website was designed to be as simple and intuitive as possible. It allows users to enter the parameters on the front page and then visualizes the results on a second page. The entire site is static and javascript based; it uses pre-trained models saved in JSON form to be opened and used by tensorflow.js, no server-side code needed.

![Main Image](/static/img/flygenius.jpg){: .img-fluid }