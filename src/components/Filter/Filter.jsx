import { SearchInput } from './Filter.styled';
export const Filter = ({ onFilter }) => {
  return (
    <label>
      <SearchInput
        type="text"
        name="name"
        placeholder="Search contact..."
        onChange={e => onFilter(e.target.value)}
      />
    </label>
  );
};
