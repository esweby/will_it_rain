import classes from './Search.module.css';

interface SearchProps {
  query: string;
  setQuery: (newTerm: string) => void;
}

const Search = ({ query, setQuery }: SearchProps) => {
  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <section className={classes.container}>
      <input
        type="text"
        value={query}
        onChange={handleQueryChange}
        className={classes.input}
        placeholder="Enter city name..."
        aria-label="City search input field"
        name="city"
      />
    </section>
  );
};

export default Search;
