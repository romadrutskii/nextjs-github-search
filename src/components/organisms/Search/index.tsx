import SearchEntityComponent from "@/components/molecules/SearchEntity";
import SearchHeader from "@/components/molecules/SearchHeader";
import { debounce } from "@/utils/functions";
import { useRouter } from "next/router";
import { useCallback, useEffect, useMemo, useState } from "react";

enum SearchEntity {
  Users = "users",
  Repositories = "repositories",
}

const searchEntities = Object.values(SearchEntity);

export default function Search() {
  const router = useRouter();

  const [query, setQuery] = useState("");
  const [entity, setEntity] = useState(SearchEntity.Users);

  const search = useCallback(
    (q: string, entity: SearchEntity) => {
      router.push(`/search/${entity}?q=${q.trim()}`);
    },
    [router]
  );

  useEffect(() => {
    if (query) {
      search(query, entity);
    }
  }, [query, entity, search]);

  const onChangeSearchText = (s: string) => {
    setQuery(s);
  };

  const debouncedChangeHandler = useMemo(() => {
    return debounce(onChangeSearchText, 500);
  }, []);

  const onChangeSearchEntity = (v: string) => {
    setEntity(v as SearchEntity);
  };

  return (
    <div className="space-y-4">
      <SearchHeader />
      <SearchEntityComponent
        onSearchInput={debouncedChangeHandler}
        searchEntities={searchEntities}
        onChangeSearchEntity={onChangeSearchEntity}
      />
    </div>
  );
}
