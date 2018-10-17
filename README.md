# Observablehq viewer

This is a local observablehq notebooks viewer. You can download your notebook in javascript format, remove the last export line and put it under the file name "notebook.js". Then open index.html in a browser and you can view and interact with your notebook. 

This was done because Observablehq has not made an external notebook viewer.

To use it download the repo either with git or as a zip file and extract it. Open the viewer/index.html file with your browser and you are ready to go. It will show the 5 minute introduction notebook from @mbostock. You can show any notebook by downlading it and removing the last export sentence (which throws and error when it is not used as a module). I have put this [**demo online**](https://elguille.neocities.org/observable_hq_viewer/index.html) to showcase, but the whole point of this project is that you don't need to host your code behind a http service.

### Roadmap

* Add new cells, move cells up and down, export notebook to a javascript
* Load remote javascript
* When a decent scratchpad is ready, it should be able to work with the dat protocol so it is a descentralized app. 
