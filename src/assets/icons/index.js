import Vue from "vue"
import SvgIcon from "@/components/SvgIcon"

Vue.component("svg-icon", SvgIcon)
const requireAll = (requireContent) => {
  requireContent.keys().map(requireContent)
}
const req = require.context("./", true, /\.svg$/)
requireAll(req)