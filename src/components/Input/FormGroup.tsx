
import { Form } from "formik"
import { Formik,FormikValues } from "formik"
import {FormGroupProps} from "@/types/Input"

export default function FormGroup<T extends FormikValues>({
    children,
    className,
    style,
    ...props
}: FormGroupProps<T>) {
    return (
        <section className={className} style={style}>
            <Formik {...props}>
                <Form>
                    {children}
                </Form>
            </Formik>
        </section>
    )
}