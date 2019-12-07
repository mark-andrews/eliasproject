To run this demo, launch a web server locally.
For example, you could run the Python standard library basic http server as follows.
```python
python -m http.server 8080
```
With that, you can use the local URL `http://0.0.0.0:8080`.
That will bring up the demo webpage.

In the demo, on page load, a text box will get immediate focus.
Every keystroke will be logged along with a millisecond level timestamp.
These will be displayed on the webpage immediately.

This is *minimal* proof of concept of how key strokes can be logged using Javascript.
As should be obvious, in a real online data collection study, the keys that are pressed and their timestamps would be recorded in a Javascript object, which would be sent back to the server.
