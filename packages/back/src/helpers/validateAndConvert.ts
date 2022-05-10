import { ClassConstructor, plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

class ValidationResult {
    data: any;

    error?: Array<any>;
}

async function validateAndConvert<T extends ClassConstructor<any>>(
    classToConvert: T,
    body: Record<string, unknown>
): Promise<ValidationResult> {
    const validationResult = new ValidationResult();
    validationResult.data = plainToInstance(classToConvert, body);
    await validate(validationResult.data, { forbidUnknownValues: true }).then(
        (errors) => {
            // errors is an array of validation errors`
            if (errors.length > 0) {
                validationResult.error = errors.map(
                    (error) => error.constraints
                );
            }
        }
    );
    return validationResult;
}

export default validateAndConvert;
