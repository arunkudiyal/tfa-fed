// Generating a component

import PropTypes from 'prop-types'

// 1. Function-based Component
// 2. Class-based Component

// 1. Function-based
const Header = (props) => {
    return (
        // JSX - JavaScript Scripting Extension - HTML + CSS + JS

        // React Fragmnet
        <>
            {/* <h1 className="page-header">This is my heading!</h1> */}
            <h1 className="page-header"> {props.title} <small> {props.id} </small> </h1>
            <p className="lead">Hi.. this is a Paraghraph</p>
        </>
    )
}

Header.defaultProps = {
    title: 'Default Props',
    id: -1
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
} 

export default Header



// 2. Class-Based
// class Header extends Component {
//     render() {
//         return (
//             <header>
//                 <h1>Heading from a Class Component!</h1>
//             </header>
//         )
//     }
// }