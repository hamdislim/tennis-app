class CustomError extends Error {
    public status: number;

    constructor(message: string, status: number) {
        super(message);
        this.name = message;
        this.status = status;
    }
}
export default CustomError;
