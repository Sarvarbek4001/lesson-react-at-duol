const ErrorMessageComponent = ({messageOfError})=>{
    return (
        <div className={"justify-center flex items-center h-screen"}>
            <div>Error message:{messageOfError}</div>
        </div>
    )
}

export default ErrorMessageComponent