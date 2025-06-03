import { TopButton } from "./styles"
import PropTypes from "prop-types"


function DefaultButton({children, theme, ...props}){

    console.log(children)
    return(
        <TopButton {...props } theme={theme} >{children}</TopButton>
    )
}

DefaultButton.propTypes = {
    children: PropTypes.node.isRequired
}

export default DefaultButton