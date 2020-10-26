import { init } from "snabbdom/init";
import { h } from "snabbdom/h";

const patch = init([]); //对比vnode 更新vnode到html

const app = document.getElementById("app");

setTimeout(() => {
  let vnode = h("div", "xxxxx");
  patch(app, vnode);
  setTimeout(() => {
    let newVnode = h("h1", "xxxxx");
    patch(vnode, newVnode);
  }, 1000);
}, 1000);
