
/* 
 * This script loads a observablehq notebook in a local browser environment. 
 * It can handle imports smoothly. All can be done in a local environment without
 * the need to run a http server.
 *  
 * The notebook should be in the notebook.js file. It should not have an export sentence 
 * at the end of the script because this is not supported by local html files due to 
 * CORS rules. 
 *
 */

const lib = new Library();

/*
 * This generates an interactive cell. Allows you to edit the inputs and code. 
 */
function Cell(variableDef, output, module) {
    var container, name, source, inputs, code, result, nameEdit, temp;
    output.appendChild(container = lib.DOM.element("div", {class: "cell-container"}));
    container.appendChild(name = lib.DOM.element("div", {class: "cell-name"}));
    container.appendChild(result = lib.DOM.element("div", {class: "cell-result"}));
    container.appendChild(source = lib.DOM.element("div", {class: "cell-source"}));
    source.appendChild(temp = lib.DOM.element("h5"));
    temp.innerHTML = "Name";
    source.appendChild(nameEdit = lib.DOM.element("input", {class: "cell-name-edit"}));
    source.appendChild(temp = lib.DOM.element("h5"));
    temp.innerHTML = "Inputs";
    source.appendChild(inputs = lib.DOM.element("input", {class: "cell-inputs"}));
    source.appendChild(temp = lib.DOM.element("h5"));
    temp.innerHTML = "Code";
    source.appendChild(code = lib.DOM.element("textarea", {class: "cell-code"}));
    var inspector = new Inspector(result);
    var variable = module.variable(inspector);

    name.innerHTML = variableDef.name + " \u276D";
    nameEdit.value = variableDef.name;
    nameEdit.onchange = function () {
        // Update the definition and then  redefine the actual variable
        variableDef.name = this.value;
        name.innerHTML = variableDef.name + " \u276D";
        variable.define(variableDef.name, variableDef.inputs, variableDef.value);
    };
    inputs.value = JSON.stringify(variableDef.inputs);
    inputs.onchange = function () {
        // Update the definition and then  redefine the actual variable
        variableDef.inputs = eval("" + this.value + "");
        variable.define(variableDef.name, variableDef.inputs, variableDef.value);
    };
    code.textContent = (String(variableDef.value));
    code.onchange = function () {
        // Update the definition and then  redefine the actual variable
        variableDef.value = eval("(" + this.value + ")");
        variable.define(variableDef.name, variableDef.inputs, variableDef.value);
    };
    variable.define(variableDef.name, variableDef.inputs, variableDef.value);
    name.onclick = function () {
        if (!container.classList.contains("cell-show-code"))
            container.classList.add("cell-show-code");
        else
            container.classList.remove("cell-show-code");
    };
    return {
        container: container, 
        inspector: inspector,
        variable: variable
    };
}

/* This function was copied from the source and was slightly modified to achieve the interactive notebook interface. */
function load(notebook, output) {
  const {modules, id} = notebook;
  const map = new Map;
  const runtime = new Runtime(lib);
  const main = runtime_module(id);

  function runtime_module(id) {
    let module = map.get(id);
    if (!module) map.set(id, module = runtime.module());
    return module;
  }
  const _modules = [];
  for (const m of modules) {
    const module = runtime_module(m.id);
    
    let i = 0;
    for (const v of m.variables) {
      if (v.from) module.import(v.remote, v.name, runtime_module(v.from));
      else if (module === main) {
        var cell = Cell(v, output, module);
      }
      else module.define(v.name, v.inputs, v.value);
      ++i;
    }
    _modules.push(module);
  }

  return {"runtime": runtime, "modules": _modules};
}

rtnb = load(notebook, document.getElementById("output"));
document.getElementById("loading").remove();
