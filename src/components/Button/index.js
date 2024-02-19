import React from "react";
import {Button} from './styles'

function thuButton({children, ...click}){
 return <Button {...click}>{children}</Button>
}

export default thuButton;