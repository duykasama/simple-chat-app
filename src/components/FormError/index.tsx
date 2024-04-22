const FormError = ({ message }: { message: string }) => {
    return (
        <small className="text-red-600">{message}</small>
    );
}

export default FormError;
