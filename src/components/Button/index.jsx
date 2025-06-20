import { TopButton } from "./styles"
import PropTypes from "prop-types"


function DefaultButton({children, theme, ...props}){
    
    return(
        <TopButton {...props } theme={theme} >{children}</TopButton>
    )
}

DefaultButton.propTypes = {
    children: PropTypes.node.isRequired,
    theme: PropTypes.string
    
}

export default DefaultButton