# Internet Explorer - Client-Server Architecture

## Overview
This document explains the fundamental concept of client-server architecture and how websites work on the internet.

---

## What is Client-Server Architecture?

**Client-Server Architecture** is a computing model where tasks and workloads are divided between two types of computers:
- **Client**: The user's machine that requests services
- **Server**: A remote machine that provides services/resources

---

## Client-Server Architecture Diagram

```
┌─────────────────────────────────────────────────────────────────┐
│                         INTERNET                                │
└─────────────────────────────────────────────────────────────────┘
          ▲                                           ▲
          │ HTTP Request                              │ HTTP Response
          │ (What does client ask for?)               │ (Server's answer)
          │                                           │
          │                                           │
    ┌─────▼──────┐                            ┌──────▼──────┐
    │   CLIENT    │                            │   SERVER    │
    ├─────────────┤                            ├─────────────┤
    │ Browser     │◄──────────────────────────►│ Web Server  │
    │ (Chrome,    │   Request-Response Cycle   │ (Node.js,   │
    │  Firefox,   │                            │  Apache,    │
    │  Safari)    │                            │  Nginx)     │
    │             │                            │             │
    │ JavaScript  │                            │ Database    │
    │ HTML/CSS    │                            │ (Storage)   │
    │ Images      │                            │ Logic       │
    └─────────────┘                            └─────────────┘
         │                                            │
         │ User Types URL                             │ Processes
         │ or Clicks Button                           │ Request
         │                                            │ Sends Data
```

---

## How the Client-Server Communication Works

### Step-by-Step Process:

```
1. USER ACTION
   ↓
   User enters URL or clicks a button in browser
   ↓
2. CLIENT REQUEST
   ↓
   Browser sends HTTP request to server
   Example: GET /products HTTP/1.1
   Headers: Host, User-Agent, etc.
   ↓
3. NETWORK TRANSMISSION
   ↓
   Request travels through internet to server's IP address
   ↓
4. SERVER PROCESSING
   ↓
   Server receives request
   Server finds the requested resource or processes the data
   Server may query database if needed
   ↓
5. SERVER RESPONSE
   ↓
   Server sends back HTTP response with:
   - Status Code (200 OK, 404 Not Found, etc.)
   - Headers (Content-Type, etc.)
   - Response Body (HTML, JSON, Images, etc.)
   ↓
6. CLIENT RENDERING
   ↓
   Browser receives response
   Browser parses HTML/CSS/JavaScript
   Browser renders the webpage
   ↓
7. DISPLAY TO USER
   ↓
   User sees the website
   User can interact with the page
   Cycle can repeat
```

---

## How to Open a Website in Browser

### Method 1: Using URL Bar

```
┌──────────────────────────────────────────────────┐
│  Browser Address Bar                             │
├──────────────────────────────────────────────────┤
│ Type URL: https://www.example.com               │
│ Press ENTER                                      │
└──────────────────────────────────────────────────┘
          ↓
   ┌──────────────────────────────────────────────┐
   │ Browser Parsing                               │
   ├──────────────────────────────────────────────┤
   │ 1. Parse URL                                  │
   │    - Protocol: https                          │
   │    - Domain: www.example.com                  │
   │    - Path: (root /)                           │
   │ 2. DNS Lookup (Find IP Address)               │
   │    www.example.com → 93.184.216.34           │
   │ 3. Establish Connection (TCP)                 │
   │ 4. Send HTTP Request                          │
   └──────────────────────────────────────────────┘
          ↓
   ┌──────────────────────────────────────────────┐
   │ Server Processing                             │
   ├──────────────────────────────────────────────┤
   │ 1. Receive Request                            │
   │ 2. Find Resource (index.html)                 │
   │ 3. Add Headers                                │
   │ 4. Send Response with HTML                    │
   └──────────────────────────────────────────────┘
          ↓
   ┌──────────────────────────────────────────────┐
   │ Browser Downloads Resources                   │
   ├──────────────────────────────────────────────┤
   │ 1. Parse HTML                                 │
   │ 2. Download CSS files                         │
   │ 3. Download JavaScript files                  │
   │ 4. Download Images                            │
   │ 5. Load Fonts                                 │
   └──────────────────────────────────────────────┘
          ↓
   ┌──────────────────────────────────────────────┐
   │ Browser Rendering                             │
   ├──────────────────────────────────────────────┤
   │ 1. Parse HTML → DOM Tree                      │
   │ 2. Parse CSS → Style Object Model             │
   │ 3. Combine → Render Tree                      │
   │ 4. Layout & Paint                             │
   │ 5. Display on Screen                          │
   └──────────────────────────────────────────────┘
          ↓
      WEBSITE VISIBLE
```

### Method 2: Using Localhost (Local Development)

```
URL: http://localhost:3000
     ↓
     localhost = 127.0.0.1 (Your Computer)
     3000 = Port Number
     ↓
     Browser connects to your own computer
     to testing development server
```

---

## HTTP Request-Response Cycle

### Request Format:

```
GET /products HTTP/1.1
Host: api.example.com
User-Agent: Mozilla/5.0 (Chrome)
Content-Type: application/json
Authorization: Bearer token123

{
  "id": 1,
  "quantity": 5
}
```

### Response Format:

```
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 145
Server: Node.js/Express

{
  "id": 1,
  "name": "Laptop",
  "price": 65000,
  "quantity": 5,
  "status": "success"
}
```

---

## Types of HTTP Requests

```
┌─────────────────────────────────────────────┐
│          HTTP REQUEST METHODS                │
├─────────────────────────────────────────────┤
│ GET     → Retrieve data (No body)            │
│ POST    → Create new data (With body)        │
│ PUT     → Update existing data (With body)   │
│ DELETE  → Remove data (With body optional)   │
│ PATCH   → Partial update (With body)         │
│ HEAD    → Like GET but no response body      │
└─────────────────────────────────────────────┘
```

---

## Browser Components

```
┌──────────────────────────────────────────────────────┐
│                 WEB BROWSER                           │
├──────────────────────────────────────────────────────┤
│                                                       │
│  ┌─ Address Bar ──────────────────────────────────┐  │
│  │ https://www.example.com                        │  │
│  └────────────────────────────────────────────────┘  │
│                                                       │
│  ┌─ Rendering Engine ──────────────────────────┐  │
│  │  • Parse HTML/XML                            │  │
│  │  • Apply CSS                                 │  │
│  │  • Execute JavaScript                        │  │
│  │  • Render on Screen                          │  │
│  └─────────────────────────────────────────────┘  │
│                                                       │
│  ┌─ Network Layer ─────────────────────────────┐  │
│  │  • Make HTTP Requests                        │  │
│  │  • Handle DNS Resolution                     │  │
│  │  • Manage Cookies                            │  │
│  │  • Cache Resources                           │  │
│  └─────────────────────────────────────────────┘  │
│                                                       │
│  ┌─ JavaScript Engine ─────────────────────────┐  │
│  │  • Execute JavaScript Code                   │  │
│  │  • Manage DOM Events                         │  │
│  │  • Handle Async Operations                   │  │
│  └─────────────────────────────────────────────┘  │
│                                                       │
└──────────────────────────────────────────────────────┘
```

---

## Server Components

```
┌──────────────────────────────────────────────────────┐
│                   WEB SERVER                          │
├──────────────────────────────────────────────────────┤
│                                                       │
│  ┌─ Request Handler ──────────────────────────────┐  │
│  │  • Receive HTTP Request                        │  │
│  │  • Parse Headers & Body                        │  │
│  │  • Route to Handler                            │  │
│  └────────────────────────────────────────────────┘  │
│                                                       │
│  ┌─ Business Logic ────────────────────────────┐  │
│  │  • Process Data                              │  │
│  │  • Authentication                            │  │
│  │  • Authorization                             │  │
│  │  • Calculations                              │  │
│  └─────────────────────────────────────────────┘  │
│                                                       │
│  ┌─ Database Access ──────────────────────────┐  │
│  │  • Query Data                                │  │
│  │  • Insert Records                            │  │
│  │  • Update Records                            │  │
│  │  • Delete Records                            │  │
│  └─────────────────────────────────────────────┘  │
│                                                       │
│  ┌─ Response Handler ─────────────────────────┐  │
│  │  • Format Response                           │  │
│  │  • Set Status Code                           │  │
│  │  • Add Headers                               │  │
│  │  • Send to Client                            │  │
│  └─────────────────────────────────────────────┘  │
│                                                       │
└──────────────────────────────────────────────────────┘
```

---

## Real-World Example: E-Commerce Checkout

```
USER OPENS WEBSITE
       ↓
1. Browser sends GET request to https://shop.com
       ↓
2. Server sends back HTML page with products list
       ↓
3. Browser displays products
       ↓
4. User clicks "Add to Cart"
       ↓
5. JavaScript on client sends POST request with product ID
       ↓
6. Server updates cart in database
       ↓
7. Server sends response with updated cart
       ↓
8. JavaScript updates cart display on page
       ↓
9. User clicks "Checkout"
       ↓
10. Browser sends POST request with payment info
       ↓
11. Server processes payment (calls payment gateway)
       ↓
12. Server updates order status in database
       ↓
13. Server sends confirmation email
       ↓
14. Server sends success response to browser
       ↓
15. Browser redirects to order confirmation page
       ↓
USER SEES "ORDER CONFIRMED"
```

---

## Summary: Key Points

| Concept | Description |
|---------|-------------|
| **Client** | Your web browser (Chrome, Firefox, Safari) |
| **Server** | Computer hosting the website/application |
| **HTTP** | Protocol for client-server communication |
| **Request** | What the client asks from the server |
| **Response** | What the server sends back to the client |
| **URL** | Address to locate a resource on the internet |
| **DNS** | Converts domain name to IP address |
| **Port** | Specific channel on a computer (e.g., 3000, 8080) |
| **Localhost** | Your own computer (127.0.0.1) |
| **Status Codes** | 200 = OK, 404 = Not Found, 500 = Server Error |

---

## How to Start a Local Development Server

### Node.js + Express Example:

```bash
# Navigate to project directory
cd my-project

# Install dependencies
npm install

# Start server
npm start
# or
node server.js

# Open browser
http://localhost:3000
```

### What Happens:

```
Terminal:
$ node server.js
Server running on http://localhost:3000

Browser:
Type: http://localhost:3000
      ↓
Browser connects to 127.0.0.1:3000
      ↓
Server sends response
      ↓
Website displays
```

---

## Architecture Comparison

### Monolithic Architecture (Simple)
```
┌─────────────────────────────────┐
│      Browser (Client)            │
└────────────────┬─────────────────┘
                 │ HTTP
                 ↓
┌─────────────────────────────────┐
│    Single Server                  │
│  ├─ Web Server                    │
│  ├─ Business Logic               │
│  ├─ Database                      │
│  └─ File Storage                 │
└─────────────────────────────────┘
```

### Microservices Architecture (Advanced)
```
┌─────────────────────────────────┐
│      Browser (Client)            │
└────────────────┬─────────────────┘
                 │ HTTP
        ┌────────┴────────┐
        ↓                 ↓
┌──────────────┐   ┌──────────────┐
│ API Gateway  │   │ API Gateway  │
└──────┬───────┘   └──────┬───────┘
       │                  │
   ┌───┴────┐         ┌───┴────┐
   ↓        ↓         ↓        ↓
┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐
│User  │ │Order │ │Prod. │ │Auth  │
│Svc.  │ │Svc.  │ │Svc.  │ │Svc.  │
└──────┘ └──────┘ └──────┘ └──────┘
```

---

## Key Takeaways

✅ **Client-Server Model**: Every web interaction follows this basic pattern
✅ **HTTP Protocol**: Standardized way for clients and servers to communicate
✅ **URL**: Used to locate specific resources on the server
✅ **Request-Response**: Clients ask, servers answer
✅ **Stateless**: Each request is independent
✅ **Scalable**: Can add more servers to handle traffic
✅ **Secure**: HTTPS encrypts communication between client and server

---

## References

- [MDN Web Docs](https://developer.mozilla.org/)
- [HTTP Status Codes](https://httpstat.us/)
- [Express.js Documentation](https://expressjs.com/)
- [Node.js Documentation](https://nodejs.org/docs/)

---

**Last Updated**: March 2026
**Author**: VARSHA S V - FSWD Internship Assignment
