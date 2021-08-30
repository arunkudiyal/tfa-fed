// Normal JS method
const withClass = (WrappedComponet, className1, className2) => {
    // Return a JSX
    return props => (
        <div className={className2}>
            <WrappedComponet />
        </div>
    )
}

export default withClass