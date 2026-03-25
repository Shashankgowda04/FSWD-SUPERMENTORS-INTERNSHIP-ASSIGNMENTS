1.CLIENT SERVER ARCHITECTURE :
Client-server architecture is a model where:

Client: The user's device (computer/mobile) that requests services
Server: A powerful computer that provides data/services
Communication happens over the internet using HTTP/HTTPS
The client sends a request, and the server sends back a response.


2. WHAT HAPPENS WHEN YOU OPEN A WEBSITE ?
Example: You type www.google.com in a browser

Step-by-Step Process:
1. URL Entered
User enters website URL in browser
Browser prepares to send a request

2. DNS Lookup
Domain name is converted into an IP address
Example: google.com → 142.250.xxx.xxx

3. Request Sent to Server
Browser sends an HTTP/HTTPS request to the server

4. Server Processing
Server receives request
It processes the request (fetches data, runs code, accesses database)

5. Server Response
Server sends back:
HTML (structure)
CSS (design)
JavaScript (functionality)

6. Browser Rendering
Browser reads HTML, CSS, JS
Constructs the webpage
Displays it to the user

7. Additional Requests
Browser loads images, videos, fonts, etc.
Multiple requests may happen in the background



3. CLIENT-SERVER ARCHITECTURE DIAGRAM :

Client (Browser)
        |
        |  Request (HTTP)
        v
Internet / Network
        |
        v
Server (Website Server)
        |
        | Response (HTML, CSS, JS)
        v
Client Screen (Web Page)
