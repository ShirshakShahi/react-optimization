import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = (props) => {
    console.log("demo output is running ");
    return <MyParagraph>{props.show ? "this is new" : ""}</MyParagraph>
}

export default React.memo(DemoOutput);