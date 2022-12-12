import Vue from "vue"
import SvgIcon from "@/components/SvgIcon"
 
Vue.component("svg-icon", SvgIcon)
 console.log(SvgIcon);
const requireAll = (requireContent) => {
  requireContent.keys().map(requireContent)
}
const req = require.context("./", true, /\.svg$/)
console.log(requireAll(req));
requireAll(req)