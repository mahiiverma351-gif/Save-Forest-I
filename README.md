🌳 Save Forest – Forest Conservation Website

1. Project Overview

Save Forest is a simple and responsive website developed to spread awareness about forest conservation and environmental protection.

The website provides information about the importance of forests, their benefits, wildlife protection and ways to save trees.

This project is developed using HTML, CSS and JavaScript and can be hosted on an Azure Virtual Machine using the NGINX web server.

2. Project Objectives

To create awareness about forest conservation.

To explain the importance of trees and forests.

To encourage people to protect wildlife.

To promote environmental protection.

To learn website development using HTML, CSS and JavaScript.

To deploy a website on Microsoft Azure.

3. Technologies Used

Technology

Purpose

HTML

Website structure

CSS

Website design and styling

JavaScript

Interactive functionality

Azure VNet

Network configuration

Azure Subnet

Network organization

Azure VM

Website hosting

Ubuntu

Operating system

NGINX

Web server

4. Project Structure

SaveForest/
│
├── index.html
├── style.css
├── script.js
└── README.md

5. Website Features

Home: Introduction to Save Forest.

About: Information about forest conservation.

Benefits: Explains the importance of forests.

Take Action: Provides ways to protect nature.

Green Pledge: Interactive button using JavaScript.

Responsive Design: Supports desktop and mobile screens.

6. How to Run the Project Locally

Download or create the SaveForest folder.

Open the folder in Visual Studio Code.

Create the HTML, CSS and JavaScript files.

Copy the respective source code into each file.

Save all files.

Open index.html in a web browser.

7. Azure Deployment

The website can be hosted on Microsoft Azure using the following steps:

Create a Resource Group in the East Asia region.

Create an Azure Virtual Network.

Create a subnet inside the VNet.

Deploy an Ubuntu Virtual Machine.

Connect the VM to the created subnet.

Configure the Network Security Group.

Install NGINX on the VM.

Upload the website files to the VM.

Place the files inside /var/www/html/.

Open the VM public IP address in a browser.

Network Configuration

Resource

Configuration

Region

East Asia

VNet

vnet-saveforest

Address Space

10.10.0.0/16

Subnet

snet-web

Subnet Range

10.10.1.0/24

Virtual Machine

vm-saveforest

Web Server

NGINX

HTTP Port

80

SSH Port

22 (restricted to your IP)

8. Commands to Install NGINX

Update Ubuntu:

sudo apt update

Install NGINX:

sudo apt install nginx -y

Check NGINX status:

sudo systemctl status nginx

Restart NGINX:

sudo systemctl restart nginx

9. Expected Output

After successful deployment, the Save Forest website will be accessible through the public IP address of the Azure Virtual Machine.

The website will display:

Save Forest heading.

Save Trees, Save Life message.

About Save Forest section.

Benefits of Forests.

Ways to Protect Forests.

Green Pledge button.

10. Security Precautions

Keep your SSH private key secure.

Allow SSH access only from your own IP address.

Allow HTTP traffic through port 80 for the website demonstration.

Do not expose unnecessary ports.

Delete unused Azure resources to avoid additional charges.

11. Conclusion

The Save Forest project demonstrates the development and deployment of a forest conservation website using HTML, CSS and JavaScript.

It also provides practical knowledge of Microsoft Azure services, including Virtual Network, Subnet, Virtual Machine and NGINX web hosting.

The project helps develop basic cloud computing and web development skills while spreading awareness about environmental protection.

12. Future Improvements

Add a tree plantation registration form.

Add a forest awareness gallery.

Connect a contact form to a backend.

Add a tree plantation campaign section.

Configure HTTPS using a domain name and SSL certificate.

Project Name: Save Forest – Forest Conservation Website

Developed Using: HTML, CSS, JavaScript and Microsoft Azure.

Project Type: Cloud Computing and Web Development.
