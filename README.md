# ws_history

An minimalist example of a Single Page App that uses the [History API](https://html.spec.whatwg.org/multipage/history.html#history).

## Install & Run

*   get the code: `git clone https://github.com/portsoc/ws_history.git`
*   change directory: `cd ws_history`
*   get dependencies: `npm install`
*   start server: `npm test`
*   open browser: `http://localhost:8080`

## The ColorServer App

*   Color server is a tool for editing colours.

### The ColorServer Server

*   Serves static files for single page ColorServer App.
*   Serves `index.html` for any path that doesn't
    match a static file (i.e. there are no 404s from
    this server).
*   Does nothing else.

### The ColorServer Client

*   On loading, examines the path, and uses it to configure
    the application's state (setting the curent colour and
    adjusting the background as a result).
*   Features sliders that vary the intensity
    of red, green and blue light that is mixed.
    *   As the sliders are moved, the background
        changes color.
*   When `Historize` is pressed the current colour is pushed
    onto the browser history.
*   Remembered colours can be returned to via the back/forward
    button whilst they are in the browser's in-memory cache.
*   Remembered colours can be returned to if the page is not in
    the cache because the client configures itself from the URL.
