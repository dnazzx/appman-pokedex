import React from "react";
import cuteimg from "../cute.png";

export const calStr = (str) => {
    let num;
    if (typeof str !== "undefined") num = str.length;
    else num = 0;
    return (num = num * 50);
  };

export const calDamage = (atk) => {
    let num;
    let sum_dmg = 0;
    if (typeof atk !== "undefined") num = atk.length;
    else num = 0;
    for (let i = 0; i < num; i++) {
      if (atk[i].damage === "") {
        atk[i].damage = 0;
        continue;
      }
      let temp = atk[i].damage.toString().replace(/\+|\//g, "");
      let dmg = parseInt(temp, 10);
      sum_dmg = sum_dmg + dmg;
    }
    return sum_dmg;
  };

export const calWeak = (weak) => {
    let num;
    if (typeof weak !== "undefined") num = weak.length;
    else num = 0;
    return (num = num * 100);
  };

export const calHappiness = (hp, weak, dmg) => {
    if (hp >= 100) hp = 100;
    else if (isNaN(hp)) hp = 0;
    let happiness = Math.ceil(hp / 10 + dmg / 10 + 10 - weak / 100) / 5;

    let element = [];
    for (let i = 0; i < happiness; i++) {
      element.push(
        <img src={cuteimg} alt="HAPPINESS" />
      );
    }
    return element;
  };