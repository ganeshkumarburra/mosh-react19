import { z } from "zod";
import { CATEGORIES, Category } from "./constants";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { ExpenseType } from ".";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description should be minimum of 3 characters" }),
  amount: z.number({ invalid_type_error: "Amount required" }),
  category: z.nativeEnum(Category),
});

export type ExpenseDataType = z.infer<typeof schema>;

interface AddExpenseProps {
  onAddExpense: (expense: ExpenseDataType) => void;
}

const AddExpense = ({ onAddExpense }: AddExpenseProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm<ExpenseDataType>({ resolver: zodResolver(schema) });
  return (
    <form
      onSubmit={handleSubmit((values) => {
        onAddExpense(values);
        reset();
      })}
    >
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          id="description"
          type="text"
          className="form-control"
          {...register("description")}
        />
        <p className="text-danger">
          {errors.description && errors.description.message}
        </p>
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          id="amount"
          type="number"
          className="form-control"
          {...register("amount", { valueAsNumber: true })}
        />
        <p className="text-danger">{errors.amount && errors.amount.message}</p>
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select id="category" className="form-select" {...register("category")}>
          {["", ...CATEGORIES].map((category) => (
            <option value={category} key={category}>
              {category}
            </option>
          ))}
        </select>
        <p className="text-danger">
          {errors.category && errors.category.message}
        </p>
      </div>
      <button disabled={!isValid} className="btn btn-primary">
        Add Expense
      </button>
    </form>
  );
};

export default AddExpense;
