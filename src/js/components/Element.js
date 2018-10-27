import React, { Fragment } from "react";
import Styles from "../../css/Element.css";

let getELementSpecificProperties = (elementId, groupId, className) => {
  let obj = {};

  switch (groupId) {
    case 1:
      if (elementId == 1) {
        obj = {
          cell: `${className} ${Styles.element}`,
          name: `${Styles.elementName} ${Styles.hydrogenName}`,
          number: `${Styles.elementNo} ${Styles.hydrogenNumber}`
        };
      } else {
        obj = {
          cell: `${className} ${Styles.element}`,
          name: `${Styles.elementName} ${Styles.groupOneName}`,
          number: `${Styles.elementNo} ${Styles.groupOneNumber}`
        };
      }
      break;
    case 2:
      obj = {
        cell: `${className} ${Styles.element}`,
        name: `${Styles.elementName} ${Styles.groupTwoName}`,
        number: `${Styles.elementNo} ${Styles.groupTwoNumber}`
      };
      break;
    case 3:
    case 4:
    case 5:
    case 6:
    case 7:
    case 8:
    case 9:
    case 10:
    case 11:
    case 12:
      obj = {
        cell: `${className} ${Styles.element}`,
        name: `${Styles.elementName} ${Styles.groupThreeToTwelveName}`,
        number: Styles.elementNo.concat(" ", Styles.groupThreeToTwelveNumber)
      };
      break;
    case 13:
      obj = {
        cell: `${className} ${Styles.element}`,
        name: `${Styles.elementName} ${Styles.groupThirteenName}`,
        number: Styles.elementNo.concat(" ", Styles.groupThirteenNumber)
      };
      break;
    case 14:
      obj = {
        cell: `${className} ${Styles.element}`,
        name: `${Styles.elementName} ${Styles.groupFourteenName}`,
        number: Styles.elementNo.concat(" ", Styles.groupFourteenNumber)
      };
      break;
    case 15:
      obj = {
        cell: `${className} ${Styles.element}`,
        name: `${Styles.elementName} ${Styles.groupFifteenName}`,
        number: Styles.elementNo.concat(" ", Styles.groupFifteenNumber)
      };
      break;
    case 16:
      obj = {
        cell: `${className} ${Styles.element}`,
        name: `${Styles.elementName} ${Styles.groupSixteenName}`,
        number: Styles.elementNo.concat(" ", Styles.groupSixteenNumber)
      };
      break;
    case 17:
      obj = {
        cell: `${className} ${Styles.element}`,
        name: `${Styles.elementName} ${Styles.groupSeventeenName}`,
        number: Styles.elementNo.concat(" ", Styles.groupSeventeenNumber)
      };
      break;
    case 18:
      obj = {
        cell: `${className} ${Styles.element}`,
        name: `${Styles.elementName} ${Styles.groupEighteenName}`,
        number: Styles.elementNo.concat(" ", Styles.groupEighteenNumber)
      };
      break;
    case 19:
      obj = {
        cell: `${className} ${Styles.element}`,
        name: `${Styles.elementName} ${Styles.groupNineteenName}`,
        number: Styles.elementNo.concat(" ", Styles.groupNineteenNumber)
      };
      break;
    case 20:
      obj = {
        cell: `${className} ${Styles.element}`,
        name: `${Styles.elementName} ${Styles.groupTwentyName}`,
        number: Styles.elementNo.concat(" ", Styles.groupTwentyNumber)
      };
      break;
    default:
      obj = {
        cell: `${className} ${Styles.element}`,
        name: Styles.elementName,
        number: Styles.elementNo
      };
      break;
  }
  return obj;
};


const Element = ({ index, className, value, onHover }) => {
  const onMouseOver = (e) => {
    e.stopPropagation();
    onHover(value, stylesObj)
  }
  
  let stylesObj = getELementSpecificProperties(
    value.ElementID,
    value.GroupID,
    className
  );
  return (
    <div key={index} className={stylesObj.cell} onMouseOver={onMouseOver}>
      <div className={stylesObj.name}>{value.Symbol}</div>
      <div className={stylesObj.number}>{value.ElementID}</div>
    </div>
  );
};

export default Element;