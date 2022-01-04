import getProductList from "./mock/data.js";
import renderGoodsList from "./showcase.js";
//import { send } from './utils.js';
//import css from "./style/main.css";

const productList = getProductList(20);
renderGoodsList(productList);
