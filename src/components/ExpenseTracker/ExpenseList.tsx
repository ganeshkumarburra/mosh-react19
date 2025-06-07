import type { ExpenseType } from ".";
import type { ExpenseDataType } from "./AddExpense";
import { CATEGORIES } from "./constants";

interface ExpenseListProps {
  expenses: ExpenseType[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: ExpenseListProps) => {
  if (expenses.length == 0) return null;
  return (
    <table className="table table-bordered mt-3">
      <thead>
        <tr>
          {[...CATEGORIES, ""].map((category) => {
            return <th key={category}>{category}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => {
          return (
            <tr key={expense.description}>
              {Object.keys(expense).map((expenseProp) => {
                if (expenseProp === "id") return;
                return (
                  <td key={expenseProp}>
                    {expense[expenseProp as keyof ExpenseDataType]}
                  </td>
                );
              })}
              <td>
                <button
                  type="button"
                  className="btn btn-outline-danger"
                  onClick={() => {
                    onDelete(expense.id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>${expenses.reduce((acc, e) => acc + e.amount, 0)}</td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
