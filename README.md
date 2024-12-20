## Internet Programming Project

Khashayar Khosrosourmi\
22302442\
Gr03

## Explanation

Hello Dear Mr. Abdillahi.\
This is my project for Internet Programming course. I used Django for backend and HTML, CSS and JS for frontend. I deployed the project with the address: [ksourmi.pythonanywhere.com](https://ksourmi.pythonanywhere.com)


Also if you want to see the website locally, you can do the following:

1 - Download and install Python Interpreter.\
2 - Install Django using ```pip install django```\
3 - Clone the repo.\
4 - Navigate to ip_website directory.\
5 - Run a local server using ```python manage.py runserver```

When you run the command, you are going to see something like this in your terminal (the address and port might differ):

Starting development server at http://127.0.0.1:8000/ \
Quit the server with CTRL-BREAK.

You can click on the link to see the website.

## Where can I find HTML, CSS and JS files?

In this project, there is a base index.html file locating at /templates/ which contains all the links to external css and js files. 

The navbar is included using the django templace tag {% include %}. In Django templates, the {% block %} tag is used in conjunction with template inheritance to define areas of a parent template that child templates can override or fill with specific content.{% block 'content' %} defines a placeholder in the parent template. Child templates use the same {% block %} name to override or define custom content for that area. 

All other HTML files are located at /home/templates/home/ and /home/templates/home/inc directories.

The CSS, JS and IMAGE files are located at /static/ directory.

Please feel free to email me or send a WhatsApp message if you have any questions about this project.

Email: ksourmi@gmail.com

WhatsApp Number: +90 533 865 8913