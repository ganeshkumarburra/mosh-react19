import { ALL_CATEGORIES, CATEGORIES, type Filter } from "./constants";

interface ExpenseFilterProps {
  onSelectCategory: (category: Filter) => void;
}

const ExpenseFilter = ({ onSelectCategory }: ExpenseFilterProps) => {
  return (
    <div className="mt-3">
      <select
        id="category"
        className="form-select"
        onChange={(event) => {
          onSelectCategory(event.target.value as Filter);
        }}
      >
        {[ALL_CATEGORIES, ...CATEGORIES].map((category) => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ExpenseFilter;
