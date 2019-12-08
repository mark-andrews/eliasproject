To run this demo, launch a web server locally.
For example, you could run the Python standard library basic http server as follows.
```python
python -m http.server 8080
```
Where is assumed that the above command is being run in a system shell (e.g., and Linux or MacOS unix terminal, or a Windows Dos shell, etc), whose working directory is `eliasproject/prototype`, and that `python` refers to a Python 3 executable.

With that, you can use the local URL `http://127.0.0.1:8080` or `http://localhost:8080` or (`http://0.0.0.0:8080`, but that might not always work).
That will bring up the demo webpage.

In the demo, on page load, a text box will get immediate focus.
Every keystroke will be logged along with a millisecond level timestamp.
These will be displayed on the webpage immediately.

This is *minimal* proof of concept of how key strokes can be logged using Javascript.
As should be obvious, in a real online data collection study, the keys that are pressed and their timestamps would be recorded in a Javascript object, which would be sent back to the server.
