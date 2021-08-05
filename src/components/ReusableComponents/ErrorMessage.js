

const ErrorMessage = ({title,message}) => {
    return (
        <div className="error-message-box">
           <h2 className="title"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i> {title}</h2> 
           <p className="text-message">{message}</p>
        </div>
    )
}

export default ErrorMessage;
