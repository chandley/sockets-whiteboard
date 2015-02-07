# sockets-whiteboard

[![Test Coverage](https://codeclimate.com/github/chandley/sockets-whiteboard/badges/coverage.svg)](https://codeclimate.com/github/chandley/sockets-whiteboard)
[![Code Climate](https://codeclimate.com/github/chandley/sockets-whiteboard/badges/gpa.svg)](https://codeclimate.com/github/chandley/sockets-whiteboard)

## Summary

Extend chatroom so a shared whiteboard is visible to participants

### Problem

### Languages/Platforms/Tools

| Languages | Technologies  | Testing Frameworks| Misc
| :-------------------------------------------- |:--------------|:-----------|:----|
| Javascript      |  Node             | Jasmine            |               |
|           |  Websockets             |                   |               |
|           |               |                   |  
|           |               |

### Solution

Drawing actions on the canvas are communicated to other users via websockets

### Setup

```
npm start
```
then open localhost:3000

### Tests

### Images
![Image of screen](https://github.com/chandley/sockets-whiteboard/blob/master/public/screenshot.png)
### To do



### Learning points
  
* Extending the websockets chatroom to a whiteboard
* HTML 5 canvas object allows shared drawing by sending coordinates down websockets connection
