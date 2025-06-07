import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type FieldValues } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(3, { message: "Name must be atleast 3 characters" }),
  age: z
    .number({ invalid_type_error: "Age is required" })
    .min(18, "Age atleast should be 18"),
});
type FormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit: handleSubmitForm,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const handleSubmit = (fieldValues: FieldValues) => {
    console.log(fieldValues);
  };

  return (
    <form onSubmit={handleSubmitForm(handleSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          id="name"
          type="text"
          className="form-control"
          {...register("name")}
        />
        <p className="text-danger">{errors.name && errors.name.message}</p>
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          id="age"
          type="number"
          className="form-control"
          {...register("age", { valueAsNumber: true })}
        />
        <p className="text-danger">{errors.age && errors.age.message}</p>
      </div>
      <button disabled={!isValid} className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
